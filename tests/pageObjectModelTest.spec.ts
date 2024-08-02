import test from "@playwright/test";
import { settingsPage } from "./pages/settingsPage";
import { landingPage } from "./pages/landingPage";
import { homePage } from "./pages/homePage";
import { signInPage } from "./pages/signInpage";

test('Login conduit test using POM', async ({page}) =>{
    await page.goto('https://react-redux.realworld.io/#/?_k=zphnm5');
    const landingpage = new landingPage(page);
    const homepage = new homePage(page);
    const settingspage = new settingsPage(page);
    const singinpage = new signInPage(page);

    await landingpage.clickSignInButton();
    await singinpage.typeEmailId('j.monton90@gmail.com');
    await singinpage.typePassword("T3st123");
    await singinpage.clickSignInButton();
    await homepage.clickSettingsbutton();
    await settingspage.clickLogOutButton();

})