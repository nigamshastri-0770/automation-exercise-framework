import { test, expect } from '@playwright/test';

test('Signup flow', async ({ page }) => {

  await page.goto(
    'https://automationexercise.com/login',
    {
      waitUntil: 'load',
      timeout: 120000
    }
  );

  await page.waitForTimeout(5000);

  const signupName = page.locator(
    'input[data-qa="signup-name"]'
  );

  await signupName.waitFor({
    state: 'visible',
    timeout: 60000
  });

  await signupName.fill('Test User');

  await page.locator(
    'input[data-qa="signup-email"]'
  ).fill(`test${Date.now()}@test.com`);

  await page.locator(
    'button[data-qa="signup-button"]'
  ).click();

  await page.waitForTimeout(5000);

});