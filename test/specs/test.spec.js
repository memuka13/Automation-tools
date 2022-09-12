const webPage = "https://pastebin.com"
const pasteText = `
        git config --global user.name "New Sheriff in Town"

        git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        
        git push origin master --force`;
const pasteName = "how to gain dominance among developers";

describe("test", () => {
    // 1. Open https://pastebin.com or a similar service in any browser

    it("test1", async () => {
        await browser.url(webPage);
    });

    // 2. Create a New Paste with the following details:
    // * Code:
    // git config --global user.name "New Sheriff in Town"
    // git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
    // git push origin master --force
    // * Syntax Highlighting: "Bash"
    // * Paste Expiration: "10 Minutes"
    // * Paste Name / Title: "how to gain dominance among developers"

    it("test2", async () => {

        await $("#postform-text").setValue(pasteText);

        await $("#select2-postform-format-container").click();
        await $("/html/body/span[2]/span/span[2]/ul/li[2]/ul/li[1]").click();

        await $("#select2-postform-expiration-container").click();
        await $("/html/body/span[2]/span/span[2]/ul/li[3]").click();

        await $("#postform-name").setValue(pasteName);

        await $("div.form-group.form-btn-container > button").click();
    });

})