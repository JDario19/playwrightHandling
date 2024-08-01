import { Page, expect, test } from "@playwright/test";

let page: Page;
test.beforeEach(async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/')
    await page.locator('//*[@id="user-name"]').fill('standard_user')
    await page.locator('//*[@id="password"]').fill('secret_sauce')
    await page.locator('//*[@id="login-button"]').click();
})

test.afterEach(async()=>{
    await page.locator('//*[@id="react-burger-menu-btn"]').click();
    await page.locator('//*[@id="logout_sidebar_link"]').click();
})

test('Add items and check out test', async ({})=>{
    await page.locator('//*[@name="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('//*[@class="shopping_cart_link"]').click();
    await page.locator('//*[@id="checkout"]').click();
    
})

test('Add items and remove cart test', async ({})=>{
    await page.locator('//*[@name="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('//*[@class="shopping_cart_link"]').click();
    await page.locator('//*[@class="btn btn_secondary btn_small cart_button"]').click();
})