import { test, expect } from '@playwright/test';

test('Signup section visible', async ({ page }) => {

  await page.goto('https://automationexercise.com/login');

  await expect(
    page.locator('input[data-qa="signup-name"]')
  ).toBeVisible();

  await expect(
    page.locator('input[data-qa="signup-email"]')
  ).toBeVisible();

});