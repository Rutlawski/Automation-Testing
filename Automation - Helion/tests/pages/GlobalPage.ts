class GlobalPage {
    async openHomepage(homepage:string) {
        await browser.url(homepage);
        await expect(browser).toHaveUrl(homepage);
    }
    async browserPause() {
        await browser.pause(2000);
    }
}

export default new GlobalPage;