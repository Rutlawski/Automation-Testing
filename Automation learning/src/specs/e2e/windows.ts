import { productPage } from "../../lib/links";
import { homepageName, productpageName } from "../../lib/texts";
import HomePage from "../../pages/HomePage";


describe("Verify if opening new windows work", async () => {
    it("Opens Homepage", async () => {
        await HomePage.openHomePage();
    })
    it("Opens Product Page in new window", async () => {
        await browser.newWindow(productPage);
        await browser.pause(2000);
    })
    it("Verifies windows titles", async () => {
        const openWindows = await browser.getWindowHandles();
        await browser.switchToWindow(openWindows[0]);
        await expect (await browser).toHaveTitle(homepageName);
        await browser.switchToWindow(openWindows[1]);
        await expect (await browser).toHaveTitle(productpageName);
    })
})