import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 120000,

  retries: 1,

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
});