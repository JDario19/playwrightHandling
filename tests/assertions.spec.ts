import {expect, test} from "@playwright/test";
import { assert } from "console";


test('My first test', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('//*[@placeholder=\'Username\']').fill('Admin');
    await page.locator('//*[@placeholder=\'Password\']').fill('admin123');
    await page.locator('button[type="submit"]').click();
    //await page.locator('//*[@id=\'login-button\']').click();
    //await page.locator('input:has-text("Login")').click();
    //await page.locator('text=Login').click(); 

    await page.locator('//p[@class=\'oxd-userdropdown-name\']').click();
    await page.locator('text=Logout').click(); 
    await page.close();

})

test('Assertions', async ({page})=>{
    await page.goto('https://www.letskodeit.com/practice')
    await expect(page.locator('//*[@id=\'displayed-text\']')).toBeVisible();
    await page.locator('//*[@id=\'hide-textbox\']').click();
    await expect(page.locator('//*[@id=\'displayed-text\']')).toBeHidden();
    await page.close();
})

test('Elements present or not', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    await expect(page.locator('//*[@class=\'added-manually\']')).not.toHaveCount(1)
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('//*[@class=\'added-manually\']')).toHaveCount(1)
    ////
})

test('disable buttons', async ({page})=>{
    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('//*[@id="property"]')).toBeEnabled();
    await expect(page.locator('//*[@title ="Disabled button"]')).toBeDisabled();
    await page.close();

})

test('mistmatch - match text', async ({page})=>{
    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('//*[@id ="color"]')).toHaveText('What is my color?');
    await expect(page.locator('//*[@id ="color"]')).not.toHaveText('1234');

})

test('attributes', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page.locator('//*[@placeholder=\'Username\']')).toHaveAttribute('name', 'username')
    await expect(page.locator('//*[@placeholder=\'Username\']')).toHaveAttribute('class', /.*oxd-input/)

})

test('validate url', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    //full url
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //partial url
    await expect(page).toHaveURL(/demo.orangehrmlive/);

})

test('validate title url', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    //full tittle
    await expect(page).toHaveTitle('OrangeHRM');
    //partial url
await expect(page).toHaveTitle(/.*HRM/);

})

test('Screenshot', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page).toHaveTitle('OrangeHRM');
    await expect(page).toHaveScreenshot();
    await page.close();

})