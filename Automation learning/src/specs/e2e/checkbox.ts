import HomePage from "../../pages/HomePage";
import WomenPage from "../../pages/WomenPage";

describe("Verify checkbox", async () => {
    it("Opens Homepage", async () => {
        await HomePage.openHomePage();
    })
    it("Clicks on Women Page and verifies url", async () => {
        await HomePage.clickWomenTab();
        await HomePage.pause();
    })
    it("selects the checkbox", async () => {
        await WomenPage.clickCheckbox();
        await WomenPage.pause();
    })
    it("Unselects the checkbox", async () => {
        await WomenPage.unclickCheckbox();
        await WomenPage.pause();
    })
    it("Selects multiple checkboxes", async () => {
        await WomenPage.clickMultiple();
        await WomenPage.pause();
    })
    it("Unselects multiple checkboxes", async () => {
        await WomenPage.unclickMultiple();
        await WomenPage.pause();
    })
})