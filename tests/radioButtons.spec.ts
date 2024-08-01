import  { test, expect } from "@playwright/test";


test('RadioButtons check', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const maleRadioButton = page.locator("//*[@value='Male']");
    const feMaleRadioButton = page.locator("//*[@value='FeMale']");

    //assertion
    expect(maleRadioButton).not.toBeChecked();
    expect(feMaleRadioButton).not.toBeChecked();

    //assertion 2
    expect(await maleRadioButton.isChecked()).toBeFalsy();
    expect(await feMaleRadioButton.isChecked()).toBeFalsy();

    await maleRadioButton.check();
    expect(maleRadioButton).toBeChecked();

    await feMaleRadioButton.check();
    expect(await feMaleRadioButton.isChecked()).toBeTruthy();
})



