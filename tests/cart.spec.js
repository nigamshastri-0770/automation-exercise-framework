import { test, expect } from '@playwright/test';

import { CartPage } from '../pages/CartPage';

test('Cart page open', async ({ page }) => {

  const cartPage = new CartPage(page);

  await cartPage.open();

  await expect(page).toHaveURL(/view_cart/);

});