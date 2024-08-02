import { expect, test } from "@playwright/test";


test('Mouse actions - single click', async ({page})=>{
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator("//*[@id='click_area']").click();
    await expect(page.locator('//*[@id=\'click_type\']')).toHaveText('Click')
    await page.close();

})

test('Mouse actions - double click', async ({page})=>{
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator("//*[@id='click_area']").dblclick();
    await expect(page.locator('//*[@id=\'click_type\']')).toHaveText('Double-Click')
    await page.close();

})

test('Mouse actions - right click', async ({page})=>{
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.locator("//*[@id='click_area']").click({button:'right'});
    await expect(page.locator('//*[@id=\'click_type\']')).toHaveText('Right-Click')
    await page.close();

})