export class SignupPage {
  constructor(page) {
    this.page = page;
    this.name = page.locator('input[data-qa="signup-name"]');
    this.email = page.locator('input[data-qa="signup-email"]');
    this.signupBtn = page.locator('button[data-qa="signup-button"]');
  }

  async signup(name, email) {
    await this.page.waitForLoadState('networkidle');
  
    await this.name.waitFor({ state: 'visible' });
    await this.name.fill(name);
  
    await this.email.fill(email);
  
    await this.signupBtn.click();
  }
}
