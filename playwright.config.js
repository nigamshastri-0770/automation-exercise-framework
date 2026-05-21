import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,

  use: {
    baseURL: 'https://automationexercise.com',
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure'
  }
});