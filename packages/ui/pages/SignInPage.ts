import {Page, expect} from '@playwright/test';
import {signInSelectors} from '../selectors/signInSelectors';

export class SignInPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(signInSelectors.url);
  }

  async fillCredentials(email: string, password: string) {
    await this.page.locator(signInSelectors.emailInput).fill(email);
    await this.page.locator(signInSelectors.passwordInput).fill(password);
  }

  async clickSignIn() {
    console.log('I clicked signin:');
    await this.page.locator(signInSelectors.continueButton).click();
  }

  async verifySignInSuccessful() {
    const homeBreadcrumb = this.page.locator(signInSelectors.homeBreadcrumb);

    await this.page.waitForURL(signInSelectors.dashboardUrl);
    await expect(homeBreadcrumb).toHaveAttribute('href', '/dashboard');
    await expect(homeBreadcrumb).toContainText('Home');
  }
}
