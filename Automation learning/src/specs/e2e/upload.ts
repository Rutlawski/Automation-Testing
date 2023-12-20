import { uploadHomepage } from "../../lib/links";
const path = require("path");

describe("Verify if uploading jpg works", async () => {
    it("Opens Homepage", async () => {
        await browser.url(uploadHomepage);
        await expect(browser).toHaveUrl(uploadHomepage);
        await browser.pause(2000);
    })
    it("Uploads jpg and clicks button", async () => {
        const fileUploadButton:WebdriverIO.Element = await $("#file-upload");
        const fileSubmitButton:WebdriverIO.Element = await $("#file-submit");
        const imagePath = path.join(__dirname, "../../images/ziemia.jpg");
        const uploadImage = await browser.uploadFile(imagePath);
        await fileUploadButton.setValue(uploadImage);
        await fileSubmitButton.click();
        await browser.pause(2000);
    })
})