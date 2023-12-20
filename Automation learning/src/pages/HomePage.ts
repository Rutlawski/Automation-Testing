import { automationHomepage } from "../lib/links";
import { womenPage } from "../lib/links";
import GlobalPage from "./GlobalPage";

class Homepage extends GlobalPage{
    get facebookIcon() {
        return $("li.facebook");
    }

    get womenTab() {
        return $("#block_top_menu");
    }

    get womenTabButton() {
        return $("a[title = 'Women']");
    }

    async openHomePage() {
        await browser.url(automationHomepage);
        await expect(browser).toHaveUrl(automationHomepage);
    }

    async scrollFacebookIcon() {
        const facebookIcon:WebdriverIO.Element = await this.facebookIcon;
        await facebookIcon.scrollIntoView();
    }

    async scrollWomenTab() {
        const womenTab:WebdriverIO.Element = await this.womenTab;
        await womenTab.scrollIntoView();
        await womenTab.moveTo();
    }

    async clickWomenTab() {
        const womenTab:WebdriverIO.Element = await this.womenTabButton;
        await womenTab.click();
        await expect(await browser).toHaveUrl(womenPage);
    }
}

export default new Homepage();