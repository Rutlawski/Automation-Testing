import ProductPage from "../../pages/ProductPage";

describe("Verify if dropwodn works", async () => {
    it("Opens Product Page", async () => {
        await ProductPage.openProductPage();
    })
    it("Selects M size", async () => {
        await ProductPage.setDropdownValueM();
        await ProductPage.pause();
    })
    it("Selects L size", async () => {
        await ProductPage.setDropdownValueL();
        await ProductPage.pause();
    })
    it("Selects S size", async () => {
        await ProductPage.setDropwdownValueS();
        await ProductPage.pause();
    })
})