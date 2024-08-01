import { expect, test } from "@playwright/test";


test('drag and drop option 1', async ({page})=>{
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const washington = page.locator('//div[@id="box3"] [text()="Washington"]')
    const unitedStates = page.locator('//div[@id="box103"] [text()="United States"]')

    await washington.hover();
    await page.mouse.down();
    await unitedStates.hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);

})

test('drag and drop option 2', async ({page})=>{
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const washington = page.locator('//div[@id="box3"] [text()="Washington"]')
    const unitedStates = page.locator('//div[@id="box103"] [text()="United States"]')

    await washington.dragTo(unitedStates);
    await page.waitForTimeout(5000);

})