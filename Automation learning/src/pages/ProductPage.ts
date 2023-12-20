import { productPage } from "../lib/links";
import GlobalPage from "./GlobalPage";

class ProductPage extends GlobalPage {
    get dropdownElement() {
        return $("#group_1");
    }
    async openProductPage() {
        await browser.url(productPage);
        await expect(browser).toHaveUrl(productPage);
    }
    async setDropdownValueM() {
        const dropdownElement:WebdriverIO.Element = await this.dropdownElement;
        await dropdownElement.selectByAttribute("value", "2");
        await browser.pause(2000);
        expect (await dropdownElement.getValue()).toContain("2");
    }
    async setDropdownValueL() {
        const dropdownElement:WebdriverIO.Element = await this.dropdownElement;
        await dropdownElement.selectByIndex(2);
        await browser.pause(2000);
        expect (await dropdownElement.getValue()).toContain("3");
    }
    async setDropwdownValueS() {
        const dropdownElement:WebdriverIO.Element = await this.dropdownElement;
        await dropdownElement.selectByVisibleText("S");
        await browser.pause(2000);
        expect (await dropdownElement.getTitle()).toContain("S");
    }
}

export default new ProductPage();