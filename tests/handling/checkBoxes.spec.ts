import  { test, expect } from "@playwright/test";

test('checkBoxes check', async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckBox = page.locator("//*[@id='checkbox1']");
    const moviesCheckBox = page.locator("//*[@id='checkbox2']");
    const hockeyCheckBox = page.locator("//*[@id='checkbox3']");

    //assertion
    expect(cricketCheckBox).not.toBeChecked();
    expect(moviesCheckBox).not.toBeChecked();
    expect(hockeyCheckBox).not.toBeChecked();

    //assertion 2
    expect(await cricketCheckBox.isChecked()).toBeFalsy();
    expect(await moviesCheckBox.isChecked()).toBeFalsy();
    expect(await hockeyCheckBox.isChecked()).toBeFalsy();

    await cricketCheckBox.check();
    await moviesCheckBox.check();
    await hockeyCheckBox.check();

    expect(cricketCheckBox).toBeChecked();
    expect(moviesCheckBox).toBeChecked();
    expect(hockeyCheckBox).toBeChecked();
    expect(await hockeyCheckBox.isChecked()).toBeTruthy();
})