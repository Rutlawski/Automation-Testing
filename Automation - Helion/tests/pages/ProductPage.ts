class ProductPage {
    get bookTitle() {
        return $("h1 > span[itemprop = name]");
    }
    get addButton() {
        return $("#addToBasket_tefust");
    }
    get bookPrice() {
        return $("#cena_d");
    }
    async getTitle():Promise<string> {
        const title:WebdriverIO.Element = await this.bookTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }
    async getPrice(): Promise<string> {
        const price:WebdriverIO.Element = await this.bookPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }
    async isBookTitleVisible(t:string) {
        const bookTitle:WebdriverIO.Element = await this.bookTitle;
        await bookTitle.waitForDisplayed();
        await expect(await bookTitle.getText()).toContain(t);
    }
    async isButtonVisible() {
        const addButton:WebdriverIO.Element = await this.addButton;
        await addButton.waitForDisplayed();
    }
    async clickAddButton() {
        const addButton:WebdriverIO.Element = await this.addButton;
        await addButton.waitForDisplayed();
        await addButton.click();
    }
}

export default new ProductPage();