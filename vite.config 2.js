import { defineConfig } from 'vite'

// Use dynamic import for ESM-only plugins so they load correctly when esbuild
export default defineConfig(async () => {
  const react = (await import('@vitejs/plugin-react')).default
  return {
    plugins: [react()],
  }
})
