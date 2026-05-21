import { test, expect } from '@playwright/test';

test('Login flow', async ({ page }) => {
  await page.goto('https://automationexercise.com/login', {
    waitUntil: 'domcontentloaded'
  });

  await page.locator('input[type="email"]').first().fill('test@test.com');
  await page.locator('input[type="password"]').fill('password');

  await page.locator('button[data-qa="login-button"]').click();
});