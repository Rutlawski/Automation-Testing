import GlobalPage from "../GlobalPage";

class SearchBar {
    get searchBar() {
        return $("#inputSearch");
    }
    get searchButton() {
        return $("//button[contains(text(), 'Szukaj')]");
    }
    get suggestionPopup() {
        return $("form#szukanie ol.item-list");
    }
    get seeAllButton() {
        return $("//a[contains(text(), 'Zobacz wszystkie')]");
    }
    get notFoundMessage() {
        return $("div.not-found");
    }
    async isSearchBarVisible() {
        const searchBar:WebdriverIO.Element = await this.searchBar;
        await searchBar.waitForDisplayed();
        await expect(await searchBar.isDisplayed()).toBeTruthy();
    }
    async searchButtonClick() {
        const searchButton:WebdriverIO.Element = await this.searchButton;
        await searchButton.waitForDisplayed();
        await searchButton.click();
    }
    async setPhrase(phrase:string) {
        const searchBar:WebdriverIO.Element = await this.searchBar;
        await searchBar.waitForDisplayed();
        await searchBar.setValue(phrase);
        await GlobalPage.browserPause();
    }
    async getSearchbarValue() {
        const searchBar:WebdriverIO.Element = await this.searchBar;
        await searchBar.waitForDisplayed();
        return await searchBar.getValue();
    }
    async clearSearchbar() {
        const searchBar: WebdriverIO.Element = await this.searchBar;
        await searchBar.clearValue();
    }
    async isSugesstionPopupVisible() {
        const suggestionPopup:WebdriverIO.Element = await this.suggestionPopup;
        await suggestionPopup.waitForDisplayed();
    }
    async seeAllButtonClick() {
        const seeAllButton:WebdriverIO.Element = await this.seeAllButton;
        await seeAllButton.waitForDisplayed();
        await seeAllButton.scrollIntoView();
        await seeAllButton.click();
    }
    async getNotFoundMessage():Promise<string> {
        const notFoundMessage:WebdriverIO.Element = await this.notFoundMessage;
        await notFoundMessage.waitForDisplayed();
        return await notFoundMessage.getText();
    }
}

export default new SearchBar;