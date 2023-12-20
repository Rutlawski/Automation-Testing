import GlobalPage from "../../pages/GlobalPage";
import homepage from "../../pages/HomePage";
import searchBar from "../../pages/components/searchBar";
import SearchResultPage from "../../pages/SearchResultPage";
import { helionHomepage, helionSearchPage, lastHelionSearchPage, searchResultsPage } from "../../lib/links";
import { searchPhrase, incorrectPhrase, notFoundMessage, searchHeader } from "../../lib/text";

describe("E2E - Searchbar functionality", async () => {
    it("Opens Helion Homepage and verifies URL", async () => {
        await GlobalPage.openHomepage(helionHomepage);
    })
    it("Verifies is SearchBar visible", async () => {
        await searchBar.isSearchBarVisible();
    })
    it("Clicks search button and verifies URL", async () => {
        await searchBar.searchButtonClick();
        await expect(browser).toHaveUrl(helionSearchPage);
    })
    it("Clicks on Homepage button and verifies URL", async () => {
        await homepage.homepageButtonClick();
    })
    it("Types in search phrase and verifies if pop-up is visible", async () => {
        await searchBar.setPhrase(searchPhrase);
        await searchBar.isSugesstionPopupVisible();
    })
    it("Clicks on See All button and verifies URL", async () => {
        await searchBar.seeAllButtonClick();
        await expect(await browser).toHaveUrl(searchResultsPage);
    })
    it("Verifies the page's header and number of books", async () => {
        await SearchResultPage.getHeaderText(searchHeader);
        await SearchResultPage.getNumberOfBooks(120);
    })
    it("Clears value on Search Bar and verifies", async () => {
        await searchBar.clearSearchbar();
        await expect(await searchBar.getSearchbarValue()).toContain("");
    })
    it("Types in incorrect search phrase and verified received message", async () =>{
        await searchBar.setPhrase(incorrectPhrase);
        await searchBar.searchButtonClick();
        await expect(await searchBar.getNotFoundMessage()).toContain(notFoundMessage);
    })
    it("Clears value in search bar and clicks on search button", async () => {
        await searchBar.clearSearchbar();
        await searchBar.searchButtonClick();
    })
    it("Verifies received page and value in search bar", async () => {
        await expect(browser).toHaveUrl(lastHelionSearchPage);
        await expect(await searchBar.getSearchbarValue()).toContain("");
    })
})