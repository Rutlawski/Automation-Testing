describe("Verify if Homepage opens", async () => {
    it("Opens Google Homepage", async () => {
        await browser.url("https://google.com");
        await browser.pause(2000);
    })
})