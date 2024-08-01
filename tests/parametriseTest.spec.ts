import test, { expect } from "@playwright/test";

const credentials=[
    {
        "userName": "Admin",
        "password": "admin123"
    },
    {
        "userName": "Admin12",
        "password": "admi"
    }
]

credentials.forEach(data=>{
    test(`Login page tcs ${data.userName} + ${data.password}`, async ({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/');
        await page.locator('//*[@placeholder=\'Username\']').fill(data.userName);
        await page.locator('//*[@placeholder=\'Password\']').fill(data.password);
        await page.locator('button[type="submit"]').click();
        await page.locator('//p[@class=\'oxd-userdropdown-name\']').click();
        await page.locator('text=Logout').click(); 
    
    })
})


