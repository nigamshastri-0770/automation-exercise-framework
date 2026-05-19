import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Login flow', async ({ page }) => {
  await page.goto('/login');

  const login = new LoginPage(page);
  await login.login('test@test.com', 'password');
});
