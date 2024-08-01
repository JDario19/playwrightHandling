import {expect, test} from "@playwright/test";


test('Using press sequentially', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('//*[@placeholder=\'Username\']').pressSequentially('Admin');
    await page.locator('//*[@placeholder=\'Password\']').pressSequentially('admin123');
    await page.locator('//*[@placeholder=\'Password\']').press('Enter')
    //await page.locator('button[type="submit"]').click();
    //await page.locator('//*[@id=\'login-button\']').click();
    //await page.locator('input:has-text("Login")').click();
    //await page.locator('text=Login').click(); 
    await page.locator('//p[@class=\'oxd-userdropdown-name\']').click();
    await page.locator('text=Logout').click(); 
    await page.close();
})

test('Press with delay',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('//*[@placeholder=\'Username\']').pressSequentially('Admin', {delay:200});
    await page.locator('//*[@placeholder=\'Password\']').pressSequentially('admin123', {delay:200});
    await page.locator('//*[@placeholder=\'Password\']').press('Enter')
    await page.locator('//p[@class=\'oxd-userdropdown-name\']').click();
    await page.locator('text=Logout').click(); 
    await page.close();
})