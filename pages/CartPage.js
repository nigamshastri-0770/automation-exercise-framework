export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/view_cart');
  }
}
