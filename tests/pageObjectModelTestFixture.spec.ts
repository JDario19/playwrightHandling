import {test } from '../fixtures/pomFixtures';


test('Login conduit test using POM', async ({page, landingPage, homePage,signInPage,settingspage }) =>{
    await page.goto('https://react-redux.realworld.io/#/?_k=zphnm5');
    await landingPage.clickSignInButton();
    await signInPage.typeEmailId('j.monton90@gmail.com');
    await signInPage.typePassword("T3st123");
    await signInPage.clickSignInButton();
    await homePage.clickSettingsbutton();
    await settingspage.clickLogOutButton();

})