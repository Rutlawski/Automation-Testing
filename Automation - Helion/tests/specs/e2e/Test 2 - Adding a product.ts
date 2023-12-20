import { helionHomepage, productSearchResult, cartPage } from "../../lib/links";
import { bookTitle, searchPhrase } from "../../lib/text";
import GlobalPage from "../../pages/GlobalPage";
import searchBar from "../../pages/components/searchBar";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";

describe("E2E - Adding a product to basket", async () => {
    let title:string = "";
    // let bookPrice:string = "";
    
    before(() => {
        browser.url(helionHomepage);
    })
    it("Types in value and clicks search button", async () => {
        await searchBar.setPhrase(searchPhrase);
        await searchBar.searchButtonClick();
        await expect(browser).toHaveUrl(productSearchResult);
    })
    it("Clicks on first book and verifies", async () => {
        await SearchResultPage.clickOnFirstBook();
        await GlobalPage.browserPause();
        await expect(ProductPage.isBookTitleVisible(bookTitle));
        await ProductPage.isButtonVisible();
        title = await ProductPage.getTitle();
    })
    it("Clicks on Add to Cart button and verifies title and price", async () => {
        await ProductPage.clickAddButton();
        await expect(browser).toHaveUrlContaining(cartPage);
        await expect(title).toContain(CartPage.getTitle);
    })
})