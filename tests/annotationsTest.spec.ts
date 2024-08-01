import { expect, test } from "@playwright/test";


test.skip('Skip test', async ()=>{
    console.log('I am a skipped test');
})

test('Skip in webkit', async ({page, browserName})=>{
    test.skip(browserName === 'webkit', 'This feature is not implemented for mac')
})

test('Not yet ready test', async ({page, browserName})=>{
    test.fail();
})

test('Fail in webkit', async ({page, browserName})=>{
    test.fail(browserName === 'webkit', 'This feature is not implemented for mac')

})

test.fixme('Fix me test', async ({page, browserName})=>{
    console.log('Im a fix me test')

})

test('Slow test', async ({browserName})=>{
    console.log('Im a slow test')
    test.slow();

})

test('Slow test with condition', async ({browserName})=>{
    test.slow(browserName === 'webkit', 'This feature is not implemented for mac')

})