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


})