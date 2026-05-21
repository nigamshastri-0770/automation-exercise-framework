import { test, expect } from '@playwright/test';

test('Login flow', async ({ page }) => {

  await page.goto('https://automationexercise.com/login', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.waitForLoadState('networkidle');

  await expect(page.locator('input[data-qa="login-email"]')).toBeVisible({
    timeout: 30000
  });

  await page.fill(
    'input[data-qa="login-email"]',
    'nigam.shastri@project-kiwiqa.com'
  );

  await page.fill(
    'input[data-qa="login-password"]',
    'r5gqwa97'
  );

  await page.click('button[data-qa="login-button"]');
});