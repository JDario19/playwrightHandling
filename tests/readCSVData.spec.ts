import test, { expect } from "@playwright/test";
import fs from 'fs';
import path from 'path'
import {parse} from 'csv-parse/sync';

const orangeHRMData = parse(fs.readFileSync(path.join(__dirname,'testData', 'orangeHRMCredentials.csv')),{
    columns:true,
    skip_empty_lines: true
})

test('Login page with valid credentials', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('//*[@placeholder=\'Username\']').fill(orangeHRMData[0].username);
    await page.locator('//*[@placeholder=\'Password\']').fill(orangeHRMData[0].password);
    await page.locator('button[type="submit"]').click();
    await page.locator('//p[@class=\'oxd-userdropdown-name\']').click();
    await page.locator('text=Logout').click(); 

})

test('Login page with invalid credentials', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('//*[@placeholder=\'Username\']').fill(orangeHRMData[1].username);
    await page.locator('//*[@placeholder=\'Password\']').fill(orangeHRMData[1].password);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator("//*[text()='CSRF token validation failed']")).toHaveText("CSRF token validation failed");
    await expect(page.locator("//*[text()='CSRF token validation failed']")).toBeVisible();

})