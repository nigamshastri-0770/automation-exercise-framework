import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 1,

  fullyParallel: false,

  reporter: [
    ['list'],
    ['html']
  ],

  use: {

    browserName: 'chromium',

    // Uses local Chrome browser
    channel: 'chrome',

    headless: false,

    viewport: {
      width: 1280,
      height: 720
    },

    screenshot: 'only-on-failure',

    trace: 'on-first-retry',

    // DISABLE VIDEO
    video: 'off',

    launchOptions: {
      slowMo: 300
    }
  }
});