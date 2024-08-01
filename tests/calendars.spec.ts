import { expect, test } from "@playwright/test";
import {DateTime} from 'luxon';


test('Type date', async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let date = "1993-10-10"
    await page.locator('//*[@id="birthday"]').fill(date);
    await page.waitForTimeout(5000);
})

test('select date', async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let date = "1993-10-10"
    
      //select past date
    await page.locator('//*[@placeholder="Start date"]').click();
    selectNewDate(20, "june 2019", page);
    await page.waitForTimeout(5000);
    await page.reload();

    //select future date
    await page.locator('//*[@placeholder="Start date"]').click();
    selectNewDate(20, "june 2026", page);
    await page.waitForTimeout(5000);
    await page.reload();
    
     //select current date
     await page.locator('//*[@placeholder="Start date"]').click();
    selectNewDate(20, "july 2024", page);
    await page.waitForTimeout(5000);
    await page.reload();


})

async function selectNewDate(date:Number, dateToSelect:string, page){
    const mothhYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]')
    const prevButton = page.locator('div[class="datepicker-days"] th[class="prev"]')
    const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]')

    const formattedMonth = DateTime.fromFormat(dateToSelect, "MMMM yyyy")

    while(await mothhYear.textContent() != dateToSelect){
        if(formattedMonth < DateTime.fromJSDate(new Date())){
            await prevButton.click();
        }
        else{
            await nextButton.click();
        }
    }
    await page.locator(`//td[@class=day] [text()="${date}"]`).click();
}