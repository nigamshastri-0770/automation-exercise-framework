import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  fullyParallel: false,
  workers: 1,

  use: {
    baseURL: 'https://automationexercise.com',
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure'
  }
});