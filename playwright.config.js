import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://automationexercise.com',
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure'
  }
});