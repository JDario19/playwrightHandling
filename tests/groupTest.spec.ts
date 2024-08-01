import { Page, expect, test } from "@playwright/test";

test.describe('suite', ()=>{
    test.beforeAll(async () => {
        console.log('database conected')
    })

    test.beforeEach(async () =>{
        console.log('Clearing cookies')
    })

    test.afterEach(async () =>{
        console.log('Cache removal')
    })

    test.afterAll(async () =>{
        console.log('Database desconnect')
    })

    test('Test 1', async() =>{
        console.log('Block 1')
    })

    test('Test 2', async() =>{
        console.log('Block 2')
    })

    test('Test 3', async() =>{
        console.log('Block 3')
    })

})

test('Test 4', async() =>{
    console.log('Block 2')
})

test('Test 5', async() =>{
    console.log('Block 5')
})