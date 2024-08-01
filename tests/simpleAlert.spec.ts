import { expect, test } from "@playwright/test";


test('Alerts click', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
    })
    await page.locator('//*[@onclick="jsAlert()"]').click();
    await expect(page.locator('//*[@id="result"]')).toHaveText("You successfully clicked an alert");

    await page.close();

})

test('Alerts confirm ok button', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alert.accept();
    })
    await page.locator('//*[@onclick="jsConfirm()"]').click();
    await expect(page.locator('//*[@id="result"]')).toHaveText("You clicked: Ok");

    await page.close();

})

test('Alerts confirm cancel button', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alert.dismiss();
    })
    await page.locator('//*[@onclick="jsConfirm()"]').click();
    await expect(page.locator('//*[@id="result"]')).toHaveText("You clicked: Cancel");

    await page.close();

})

test('Alerts textbox ok', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt');
        await alert.accept("Playwright");
    })
    await page.locator('//*[@onclick="jsPrompt()"]').click();
    await expect(page.locator('//*[@id="result"]')).toHaveText("You entered: Playwright");

    await page.close();

})

test('Alerts textbox cancel', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt');
        await alert.dismiss();
    })
    await page.locator('//*[@onclick="jsPrompt()"]').click();
    await expect(page.locator('//*[@id="result"]')).toHaveText("You entered: null");

    await page.close();

})