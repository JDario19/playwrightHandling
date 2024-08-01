import { expect, test } from "@playwright/test";


test('Upload multiple files', async ({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('//*[@name="files[]"]').click()
    ])
    await uploadFile[0].setFiles(['filesToUpload/info.txt','filesToUpload/info2.txt'])

    await page.waitForTimeout(5000);

})


test('Upload multiple files way 2', async ({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('//*[@name="files[]"]',['filesToUpload/info.txt','filesToUpload/info2.txt'])

    await page.waitForTimeout(5000);


})