import { test } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage.js';

test('Signup flow', async ({ page }) => {
  await page.goto('/login');

  const signup = new SignupPage(page);
  await signup.signup('Test User', 'test@test.com');
});
