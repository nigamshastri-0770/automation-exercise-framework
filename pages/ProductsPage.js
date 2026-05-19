export class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/products');
  }
}
