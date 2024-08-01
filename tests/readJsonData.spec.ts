import test, { expect } from "@playwright/test";
//import * as orangeHRMdata from './testData/orangeHRMCredentials.json';

import * as orangeHRMdata from './testData/orangeHRMCredentials.json'

test('Login page with valid credentials', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('//*[@placeholder=\'Username\']').fill(orangeHRMdata.validUserName);
    await page.locator('//*[@placeholder=\'Password\']').fill(orangeHRMdata.validPassword);
    await page.locator('button[type="submit"]').click();
    await page.locator('//p[@class=\'oxd-userdropdown-name\']').click();
    await page.locator('text=Logout').click(); 

})

test('Login page with invalid credentials', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('//*[@placeholder=\'Username\']').fill(orangeHRMdata.invalidUserName);
    await page.locator('//*[@placeholder=\'Password\']').fill(orangeHRMdata.invalidPassword);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator("//*[text()='CSRF token validation failed']")).toHaveText("CSRF token validation failed");
    await expect(page.locator("//*[text()='CSRF token validation failed']")).toBeVisible();

})