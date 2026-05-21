import { test, expect } from '@playwright/test';

test('Login flow', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');

  await page.fill('input[data-qa="login-email"]', 'nigam.shastri@project-kiwiqa.com');

  await page.fill('input[data-qa="login-password"]', 'r5gqwa97');

  await page.click('button[data-qa="login-button"]');

  await page.waitForTimeout(5000);
});