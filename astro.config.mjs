// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    define: {
      'process.env.GITHUB_CLIENT_ID': JSON.stringify(process.env.GITHUB_CLIENT_ID),
      'process.env.GITHUB_CLIENT_SECRET': JSON.stringify(process.env.GITHUB_CLIENT_SECRET),
    }
  }
});