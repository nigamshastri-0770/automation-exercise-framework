import { test } from '@playwright/test';
import { CartPage } from '../pages/CartPage.js';

test('Cart page open', async ({ page }) => {
  const cart = new CartPage(page);
  await cart.open();
});
