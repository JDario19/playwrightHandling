import { expect, test } from "@playwright/test";


test('Web table', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[name="BookTable"]');
    //total rows and columns
    const columns = table.locator('tr th')
    console.log("Number of columns: ", await columns.count());          
    
    const rows = table.locator('tbody tr');
    console.log("Number of rows: ", await rows.count());  

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(7)
    await page.close();

})

test('Web table select single checkbox', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    //total rows and columns
    const columns = table.locator('thead tr th')   
    const rows = table.locator('tbody tr');
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 3'
    })
    await matchedRow.locator('input').check();
})

test('Web table select multiple checkbox', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    //total rows and columns
    const columns = table.locator('thead tr th')   
    const rows = table.locator('tbody tr');
    await selectProducts(rows, page, 'Product 1');
    await selectProducts(rows, page, 'Product 4');
    await selectProducts(rows, page, 'Product 3');

})

async function selectProducts(rows, page, productName) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: productName
    })
    await matchedRow.locator('input').check();
}

test('Web table page 1', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');
    
    for(let i =0; i < await rows.count(); i ++){
        const row = rows.nth(i)
        const rowData = row.locator('td');
        for(let j =0; j< await rowData.count(); j++){
            const cellData = await rowData.nth(j).textContent();
            console.log(cellData);
        }
    }
})

test('Web table all the pages', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');
    
    const pages = page.locator('#pagination li a')
    const totalPages = await pages.count();
    console.log('Total number of pages: ' + totalPages);
    
    for(let p = 0; p< totalPages; p++){
        if( p>0){
            await pages.nth(p).click();
        }
        for(let i =0; i < await rows.count(); i ++){
            const row = rows.nth(i)
            const rowData = row.locator('td');
            for(let j =0; j< await rowData.count(); j++){
                const cellData = await rowData.nth(j).textContent();
                console.log(cellData);
            }
        }
    }
})