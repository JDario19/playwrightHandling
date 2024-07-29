import  { test, expect } from "@playwright/test";


test('dropdown static ', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.selectOption("//*[@id='Skills']",{
        value:"Android"
    })
    await page.pause();
    await page.selectOption("//*[@id='Skills']",{
        label:"Art Design"
    })
    await page.pause();
    await page.selectOption("//*[@id='Skills']",{
        index: 3
    })
    
})

test('dropdown multi static', async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption("//*[@name='States']",[
        {value:"Ohio"},
        {label:"Texas"},
        {index: 3}
    ])
    await page.pause();
    
})

test('dropdown dinamic', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator("//*[@role='combobox']").click()
    await page.locator("//*[@role='textbox']").fill("India")
    await page.locator("//*[@id='select2-country-results']").click();
    await page.waitForTimeout(7000)
    await page.pause();
    
})


test('dropdown non searcheable dinamic', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator("//*[@role='combobox']").click()
    await page.locator("//*[@id='select2-country-results']").locator("li", {
        hasText: "India"
    }).click();
    await page.pause();
    
})