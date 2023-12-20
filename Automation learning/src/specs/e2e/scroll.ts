import HomePage from "../../pages/HomePage";

describe("Verify if scroll works", async () => {
    it("Opens Homepage", async () => {
        await HomePage.openHomePage();
    })
    it("Scrolls down to FB icon", async () => {
        await HomePage.scrollFacebookIcon();
        await HomePage.pause();
    })
    it("Scrolls and moves to Women tab", async () => {
        await HomePage.scrollWomenTab();
        await HomePage.pause();
    })
})