
describe('test', () => {
    it('test1', async () => {
        await browser.url('https://pastebin.com');
        await $("#postform-text").setValue("Hello from WebDriver");
        await $("#select2-postform-expiration-container").click();

        await $("/html/body/span[2]/span/span[2]/ul/li[3]").click();
        await $("#postform-name").setValue("helloweb");
        await $("div.form-group.form-btn-container > button").click();
    });
});