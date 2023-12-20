import { helionHomepage } from "../lib/links";

class Homepage {
    get homepageButton() {
        return $("//a[contains(text(), 'HELION')]");
    }
    async homepageButtonClick() {
        const homepageButton:WebdriverIO.Element = await this.homepageButton;
        await homepageButton.waitForDisplayed();
        await homepageButton.click();
        expect(browser).toHaveUrl(helionHomepage);
    }
}

export default new Homepage();