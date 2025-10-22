import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@shared/schema";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-elevate p-2 rounded-md"
              aria-label="GitHub"
              data-testid="link-footer-github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-elevate p-2 rounded-md"
              aria-label="LinkedIn"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-muted-foreground hover:text-primary transition-colors hover-elevate p-2 rounded-md"
              aria-label="Email"
              data-testid="link-footer-email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
