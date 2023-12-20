class GlobalPage {
    async pause() {
        await browser.pause(2000);
    }
    async longPause() {
        await browser.pause(3000);
    }
}

export default GlobalPage;