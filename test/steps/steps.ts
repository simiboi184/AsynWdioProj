import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from 'src/pages/login.page';
import SecurePage from 'src/pages/secure.page';
import assertions from 'src/utils/assertions';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(message);

    await assertions.toBeExisting(SecurePage.flashAlert);
    await assertions.toHaveTextContaining(SecurePage.flashAlert, message);
});

