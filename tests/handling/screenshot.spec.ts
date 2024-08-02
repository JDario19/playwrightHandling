import test, { expect } from "@playwright/test";

test('Screenshot', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('//*[@placeholder=\'Username\']').fill('Admin');
    await page.locator('//*[@placeholder=\'Password\']').fill('admin123');
    //await page.screenshot({path:'tests/screenshots'+'LoginPage.png'});
    await page.locator('button[type="submit"]').click();
    await page.locator('//p[@class=\'oxd-userdropdown-name\']').click();
    //await page.screenshot({path:'tests/screenshots'+'HomePage.png'});
    await page.locator('text=Logout').click(); 

})