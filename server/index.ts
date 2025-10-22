import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Ensure Express respects the NODE_ENV environment variable. By default
// Express uses 'development' which will enable the Vite dev middleware.
// For production builds (including when NODE_ENV is not explicitly set
// in some deployment environments) we default to 'production' so the
// server serves the built static assets.
app.set('env', process.env.NODE_ENV || 'production');

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  // Try to start the server on the configured port. If the port is in use
  // (EADDRINUSE), attempt the next port up to a small number of retries.
  // This makes local development more resilient when the default port is busy.
  const maxRetries = parseInt(process.env.PORT_TRIES || "10", 10);
  const startPort = port;

  const startServerOnPort = (p: number) =>
    new Promise<void>((resolve, reject) => {
      const onError = (err: any) => {
        server.off("listening", onListen);
        server.off("error", onError);
        reject(err);
      };

      const onListen = () => {
        server.off("error", onError);
        server.off("listening", onListen);
        resolve();
      };

      server.once("error", onError);
      server.once("listening", onListen);

      try {
        server.listen({ port: p, host: "0.0.0.0" });
      } catch (err) {
        server.off("error", onError);
        server.off("listening", onListen);
        reject(err);
      }
    });

  (async () => {
    for (let i = 0; i < maxRetries; i++) {
      const tryPort = startPort + i;
      try {
        await startServerOnPort(tryPort);
        log(`serving on port ${tryPort}`);
        break;
      } catch (err: any) {
        if (err && err.code === "EADDRINUSE") {
          log(`port ${tryPort} in use, trying next port...`);
          // continue to next iteration
          if (i === maxRetries - 1) {
            log(`failed to bind to a port after ${maxRetries} attempts`);
            process.exit(1);
          }
        } else {
          log(`server error during startup: ${err?.code || err?.message || err}`);
          process.exit(1);
        }
      }
    }
  })();
})();
