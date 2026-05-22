import { test, expect } from '@playwright/test';

test('Login page loads successfully', async ({ page }) => {

  await page.goto('https://automationexercise.com/login');

  await expect(page).toHaveTitle(/Automation Exercise/);

  await expect(
    page.locator('input[data-qa="login-email"]')
  ).toBeVisible();

  await expect(
    page.locator('input[data-qa="login-password"]')
  ).toBeVisible();

});