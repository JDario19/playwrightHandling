import { expect, test } from "@playwright/test";


test('Download file', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    await page.locator('//*[@id="textbox"]').click();
    await page.locator('//*[@id="textbox"]').pressSequentially('file test');
    await page.locator('//*[@id="createTxt"]').click();
    const download = await Promise.all([
        page.waitForEvent('download'),
        page.locator('//*[@id="link-to-download"]').click()
    ])

    const path = await download[0].path();
    console.log("Downloaded pat..." + path);

    // way 1 default file name
    //const fileName = download[0].suggestedFilename();
    //await download[0].saveAs(fileName)
    //await page.waitForTimeout(5000);

    // way 2 customisingfile file name
    const customisingFileName = "Playwright test file"
    await download[0].saveAs(customisingFileName)
    await page.waitForTimeout(5000);

})