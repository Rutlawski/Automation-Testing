import { helionHomepage } from "../lib/links";

class Homepage {
    get homepageButton() {
        return $("//a[contains(text(), 'HELION')]");
    }
    get userTools() {
        return $("div.your-profile");
    }
    async homepageButtonClick() {
        const homepageButton:WebdriverIO.Element = await this.homepageButton;
        await homepageButton.waitForDisplayed();
        await homepageButton.click();
        expect(browser).toHaveUrl(helionHomepage);
    }
    async getNumber() {
        const userTools:WebdriverIO.Element = await this.userTools;
        await userTools.waitForDisplayed();
        await userTools.getValue();
    }
}

export default new Homepage();