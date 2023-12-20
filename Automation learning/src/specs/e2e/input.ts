import { searchValue } from "../../lib/texts.ts";
import HomePage from "../../pages/HomePage.ts";

describe("Input lesson", async () => {
    it("Opens Homepage", async () => {
        await HomePage.openHomePage();
    })
    it("Enters text into searchbar", async() => {
        const searchBar: WebdriverIO.Element = await $("#search_query_top");
        await searchBar.setValue(searchValue);
        await browser.pause(2000);
        expect(await searchBar.getValue()).toHaveValue(searchValue);
    })
    it("Clears text in input", async () => {
        const searchBar: WebdriverIO.Element = await $("#search_query_top");
        await searchBar.clearValue();
        await browser.pause(2000);
        expect (await searchBar.getValue()).toHaveValue("");
    })
})