import { defineConfig } from '@playwright/test';

export default defineConfig({

  retries: 1,

  use: {
    browserName: 'chromium',

    headless: true,

    ignoreHTTPSErrors: true,

    screenshot: 'only-on-failure',

    trace: 'on-first-retry',

    video: 'retain-on-failure'
  }

});