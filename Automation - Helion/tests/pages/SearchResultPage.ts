class searchResultsPage {
    get header() {
        return $("#page-title h1");
    }
    get allBooks() {
        return $$("ul.list > li");
    }
    get firstBook() {
        return $("ul.list > li.swiper-slide > a.tefust--link");
    }
    async getHeaderText(h1:string) {
        const header:WebdriverIO.Element = await this.header;
        await expect (await header.getText()).toContain(h1);
    }
    async getNumberOfBooks(books:number) {
        const allBooks:WebdriverIO.ElementArray = await this.allBooks;
        expect(await allBooks.length).toEqual(books);
    }
    async clickOnFirstBook() {
        const firstBook:WebdriverIO.Element = await this.firstBook;
        await firstBook.click();
    }
}

export default new searchResultsPage();