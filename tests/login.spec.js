import { test, expect } from '@playwright/test';

test('Login flow', async ({ page }) => {

  await page.goto(
    'https://automationexercise.com/login',
    {
      waitUntil: 'load',
      timeout: 120000
    }
  );

  await page.waitForTimeout(5000);

  const emailField = page.locator(
    'input[data-qa="login-email"]'
  );

  await emailField.waitFor({
    state: 'visible',
    timeout: 60000
  });

  await emailField.fill(
    'nigam.shastri@project-kiwiqa.com'
  );

  await page.locator(
    'input[data-qa="login-password"]'
  ).fill('r5gqwa97');

  await page.locator(
    'button[data-qa="login-button"]'
  ).click();

  await page.waitForTimeout(5000);

});