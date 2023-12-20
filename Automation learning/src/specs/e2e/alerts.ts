import { alertHomepage } from "../../lib/links";

describe("Verifies how alerts work", async () => {
    it("Opens alert homepage", async () => {
        await browser.url(alertHomepage);
        await browser.pause(2000);
        await expect(browser).toHaveUrl(alertHomepage);
    })
    it("Click on the Alert Button", async () => {
        const alertButton:WebdriverIO.Element = await $(".btn-danger");
        await alertButton.click();
        await expect(await browser.isAlertOpen()).toBeTruthy;
        await browser.acceptAlert();
        await expect(await browser.isAlertOpen()).toBeFalsy;
    })
    it("Switches to Confirm Alert tab and clicks on confirm Alert Button", async () => {
        const confirmAlertTab:WebdriverIO.Element = await $("//a[contains(text(), 'Alert with OK & Cancel')]");
        await confirmAlertTab.click();
        const confirmAlertButton:WebdriverIO.Element = await $(".btn-primary");
        await confirmAlertButton.click();
        await expect(await browser.isAlertOpen()).toBeTruthy;
        await browser.dismissAlert();
        const p:WebdriverIO.Element = await $("#demo");
        const cancelMessage:string = await p.getText();
        await expect(await cancelMessage).toContain("You Pressed Cancel");
    })
    it("Switches to Input Alert tab and clicks on input Alert button", async () => {
        const inputAlertTab:WebdriverIO.Element = await $("//a[contains(text(), 'Alert with Textbox')]");
        await inputAlertTab.click();
        const inputAlertButton:WebdriverIO.Element = await $(".btn-info");
        await inputAlertButton.click();
        await browser.sendAlertText("Marek Ostrowski");
        await browser.acceptAlert();
        const p:WebdriverIO.Element=  await $("#demo1");
        await expect(await p.getText()).toContain("Hello Marek Ostrowski How are you today");
    })
})