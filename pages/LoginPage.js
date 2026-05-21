export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('input[data-qa="login-email"]');
    this.password = page.locator('input[data-qa="login-password"]');
    this.loginBtn = page.locator('button[data-qa="login-button"]');
  }

  async login(email, password) {
    await this.page.waitForLoadState('networkidle');
  
    await this.email.waitFor({ state: 'visible' });
    await this.email.fill(email);
  
    await this.password.fill(password);
  
    await this.loginBtn.click();
  }
}
