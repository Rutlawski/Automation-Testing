class CartPage {
    get title() {
        return $("//div[contains(text(), 'Testowanie full stack. Praktyczny przewodnik dostarczania oprogramowania wysokiej jakości')]");
    }
    async getTitle(): Promise<string> {
        const title:WebdriverIO.Element = await this.title;
        await title.waitForDisplayed;
        return await title.getText();
    }
}

export default new CartPage();