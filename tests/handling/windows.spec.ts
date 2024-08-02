import { expect, test } from "@playwright/test";


test('Single tab', async ({page})=>{
    await page.goto('https://www.selenium.dev/');
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('//*[contains(text(),"Learn more & submit")]')
    ])

    await newTab.waitForLoadState();
    newTab.locator('//*[@id="link_button-54-5512"]').click();
    await newTab.waitForTimeout(5000);

})

test('Single window', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator(".analystic[href=\"#Seperate\"]").click();
    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('//*[@class="btn btn-primary"]')
    ])

    await newWindow.waitForLoadState();
    newWindow.locator('//*[contains(text(),"Learn more & submit")]').click();
    await newWindow.waitForTimeout(5000);

})

test('multiple tab tab', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator("[href=\"#Multiple\"]").click();
    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('//*[@onclick="multiwindow()"]')
    ])
    await multipleTab.waitForLoadState();
    const pages = multipleTab.context().pages();
    console.log("Total pages opened: " + pages.length);

    await pages[1].locator('//*[contains(text(),"Learn more & submit")]').click();

    await pages[2].locator('//*[@placeholder="Email id for Sign Up"]').fill("test@gmail.com");
    await multipleTab.waitForTimeout(5000);

    await pages[1].close();
    await pages[2].close();

    //https://www.hyrtutorials.com/p/window-handles-practice.html

})