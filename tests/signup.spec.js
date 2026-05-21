import { test, expect } from '@playwright/test';

test('Signup flow', async ({ page }) => {
  await page.goto('https://automationexercise.com/login', {
    waitUntil: 'domcontentloaded'
  });

  await page.locator('input[data-qa="signup-name"]').fill('Test User');

  await page.locator('input[data-qa="signup-email"]').fill('test123@test.com');

  await page.locator('button[data-qa="signup-button"]').click();
});