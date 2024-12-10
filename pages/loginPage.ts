import { Page } from 'playwright';

export class LoginPage {
    private page: Page;
    private usernameInput = '#username';
    private passwordInput = '#password';
    private loginButton = 'button[type="submit"]';

    constructor(page: Page) {
        this.page = page;
    }

    async loginToApp(username: string = 'admin', password: string = 'password123') {
        await this.page.goto('/');
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameInput).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordInput).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(this.loginButton).click();
    }
}