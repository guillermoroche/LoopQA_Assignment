import { Page } from 'playwright';

export class HomePage {
    private page: Page;

    public readonly sideMenuButtons = {
        WebApplication: 'Web Application',
        MobileApplication: 'Mobile Application',
        MarketingCampaign: 'Marketing Campaign',
    };

    public readonly tags = {
        Feature: 'Feature',
        HighPriority: 'High Priority',
        Bug: 'Bug',
        Design: 'Design',
    }

    constructor(page: Page) {
        this.page = page;
    }

    async clickSideMenuButton(buttonName: string) {
        const buttonLocator = this.page.locator(`div.flex-col button:has-text("${buttonName}")`);
        await buttonLocator.click();
    }
}
