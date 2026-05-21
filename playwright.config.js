import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 120000,

  expect: {
    timeout: 60000
  },

  retries: 1,

  workers: 1,

  reporter: 'html',

  use: {

    baseURL: 'https://automationexercise.com',

    headless: true,

    actionTimeout: 30000,

    navigationTimeout: 120000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry'
  }
});