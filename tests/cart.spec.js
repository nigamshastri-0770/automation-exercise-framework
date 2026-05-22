import { test, expect } from '@playwright/test';

test('Cart page open', async ({ page }) => {

  await page.goto('https://automationexercise.com/view_cart');

  await expect(page).toHaveURL(/view_cart/);

});