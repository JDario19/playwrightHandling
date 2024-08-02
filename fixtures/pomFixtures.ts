import {test as baseTest} from '@playwright/test'
import { landingPage } from '../tests/pages/landingPage';
import { homePage } from '../tests/pages/homePage';
import { signInPage } from '../tests/pages/signInpage';
import { settingsPage } from '../tests/pages/settingsPage';

type pages = {
    landingPage : landingPage,
    homePage : homePage,
    signInPage : signInPage,
    settingspage : settingsPage
}

const testPages = baseTest.extend<pages>({
    landingPage: async({page}, use)=>{
        await use(new landingPage(page));
    },
    homePage: async({page}, use)=>{
        await use(new homePage(page));
    },
    signInPage: async({page}, use)=>{
        await use(new signInPage(page));
    },
    settingspage: async({page}, use)=>{
        await use(new settingsPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;