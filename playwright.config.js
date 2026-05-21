import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  fullyParallel: false,
  workers: 1,

  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false,
    baseURL: 'https://automationexercise.com',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure'
  }
});