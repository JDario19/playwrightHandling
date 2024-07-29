import { expect, test } from "@playwright/test";


test('iframe using page.frame', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //find total number of frames
    const allFrames = page.frames
    const allFramesCount = allFrames.length;
    console.log('Total frames: ' + allFramesCount);
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1?.locator('//*[@name="mytext1"]').fill("Playwright");
    await page.waitForTimeout(5000);
})

test('iframe using page.frameLocator', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame1 = page.frameLocator('frame[src="frame_1.html"]')
    await frame1?.locator('//*[@name="mytext1"]').fill("Playwright");
    await page.waitForTimeout(5000);

})

test('iframe nested', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = await page.frame({url:'https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true'})
    const childFrames = frame3?.childFrames();

    await childFrames[0].locator('//*[@id="i8"]').check({force:true});
    await childFrames[0].locator('//*[@id="i19"]').check({force:true});
    await page.waitForTimeout(5000);

    
})