import test from "@playwright/test"

test('Test 1 @smoke', async() =>{
    console.log('Block 1')
})

test('Test 2 @sanity', async() =>{
    console.log('Block 2')
})

test('Test 3 @regression ', async() =>{
    console.log('Block 3')
})

test('Test 3 @regression', async() =>{
    console.log('Block 3')
})
