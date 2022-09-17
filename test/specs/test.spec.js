const webPage = "https://pastebin.com"
const pasteText = `
        git config --global user.name "New Sheriff in Town"

        git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        
        git push origin master --force`;
const pasteName = "how to gain dominance among developers";

describe("Open Web Page", () => {

    // 1. Open https://pastebin.com or a similar service in any browser

    it("test1", async () => {
        await browser.url(webPage);
        // await $("a.btn-sign.sign-in").click();
        // await $("a.login-social.-google").click();
        // await $("li:nth-child(1) > div").click();
    });

    // 2. Create a New Paste with the following details:
    // * Code:
    // git config --global user.name "New Sheriff in Town"
    // git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
    // git push origin master --force
    // * Syntax Highlighting: "Bash"
    // * Paste Expiration: "10 Minutes"
    // * Paste Name / Title: "how to gain dominance among developers"

    it("Create a New Paste and Save", async () => {

        await $("#postform-text").setValue(pasteText);

        await $("#select2-postform-format-container").click();
        await $("/html/body/span[2]/span/span[2]/ul/li[2]/ul/li[1]").click();

        await $("#select2-postform-expiration-container").click();
        await $("/html/body/span[2]/span/span[2]/ul/li[3]").click();

        await $("#postform-name").setValue(pasteName);

        await $("div.form-group.form-btn-container > button").click();
    });

    // 3. Save paste and check the following:
    // * Browser page title matches Paste Name / Title
    // * Syntax is suspended for bash
    // * Check that the code matches the one entered in paragraph 2

    it("Check Saved Data", async () => {

        const pastedTextArea = await $("ol.bash");
        await pastedTextArea.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: "10 seconds passed"
        })
        await expect(await browser.getTitle()).toEqual(`${pasteName} - Pastebin.com`);

        const value = await $("div.left > a.btn.-small.h_800").getText();
        await expect(value).toEqual("Bash");

        const inputText = await $("div.source > ol").getText();
        const newPasteText = await pasteText.replaceAll(/\s+/gm, "");
        const newInputText = await inputText.replaceAll(/\s+/gm, "");
        await expect(newInputText).toEqual(newPasteText);
    })
})

