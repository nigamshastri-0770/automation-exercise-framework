import { test, expect } from '@playwright/test';

test('Signup flow', async ({ page }) => {

  await page.goto('https://automationexercise.com/login', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.waitForLoadState('networkidle');

  await expect(page.locator('input[data-qa="signup-name"]')).toBeVisible({
    timeout: 30000
  });

  await page.locator(
    'input[data-qa="signup-name"]'
  ).fill('Test User');

  await page.locator(
    'input[data-qa="signup-email"]'
  ).fill(`test${Date.now()}@test.com`);

  await page.click('button[data-qa="signup-button"]');
});