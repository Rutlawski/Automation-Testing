import GlobalPage from "./GlobalPage";

class WomenPage extends GlobalPage{
    get checkbox() {
        return $("#layered_category_4");
    
    }
    get multipleCheckboxes() {
        return $$("#ul_layered_id_attribute_group_1 li  input");
    }
    async clickCheckbox() {
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.click();
        await expect (checkbox).toBeSelected;
    }
    async unclickCheckbox() {
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.click();
        await expect (checkbox.isSelected).toBeFalsy;
    }
    async clickMultiple() {
        const checkbox:WebdriverIO.Element = await this.checkbox;
        const multipleCheckboxes:WebdriverIO.ElementArray = await this.multipleCheckboxes;
        await multipleCheckboxes.map(async item => {
            await item.click();
        })
        expect (await checkbox.isSelected).toBeTruthy;
    }
    async unclickMultiple() {
        const checkbox:WebdriverIO.Element = await this.checkbox;
        const multipleCheckboxes:WebdriverIO.ElementArray = await this.multipleCheckboxes;
        await multipleCheckboxes.map(async item => {
            await item.click();
        })
        expect (await checkbox.isSelected).toBeFalsy;
    }
}

export default new WomenPage();