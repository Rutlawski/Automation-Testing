class CartPage {
    get title() {
        return $("//div[contains(text(), 'Testowanie full stack. Praktyczny przewodnik dostarczania oprogramowania wysokiej jakości')]");
    }
    get price() {
       return $("h3#cart-edit-summary > div") ;
    }
    get checkbox() {
        return $("td.checkbox > div > label > span");
    }
    get removeButton() {
        return $("div#usun > div > p > a > span");
    }
    get emptyCartText() {
        return $("div.infobox > p");
    }
    async getTitleOnCart(): Promise<string> {
        const title:WebdriverIO.Element = await this.title;
        await title.waitForDisplayed;
        return await title.getText();
    }
    async getPriceOnCart():Promise<string> {
        const price:WebdriverIO.Element = await this.price;
        await price.waitForDisplayed();
        return await price.getText();
    }
    async clickCheckbox() {
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }
    async clickRemoveButton() {
        const removeButton:WebdriverIO.Element = await this.removeButton;
        await removeButton.waitForDisplayed();
        await removeButton.click();
    }
    async getEmptyCartText():Promise<string> {
        const emptyCartText:WebdriverIO.Element = await this.emptyCartText;
        await emptyCartText.waitForDisplayed();
        return await emptyCartText.getText();
    }
    async acceptAlert() {
        await browser.acceptAlert();
    }
    
}

export default new CartPage();