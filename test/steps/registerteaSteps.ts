import { Given, When, Then } from "@cucumber/cucumber"
import registerTeaPage from 'src/pages/registertea.page'

Given(/^I am on practice page \"([^\"]*)\"$/, async (url:string) => {
    browser.url(url);
    browser.maximizeWindow();
    browser.pause(3500); 
});

When(/^I enter firstname (.+) and lastname (.+)$/, async (fname:string, lname:string) => {
    await registerTeaPage.setFirstAndLastName(fname, lname);
});

Then(/^I validate page header \"([^\"]*)\"$/, async (practiceform:string) => {
    await registerTeaPage.validatePageForms(practiceform);
});

Then(/^I select gender (.+) years (.+) favourite chai (.+) and reason (.+)$/, async (gender:string, yrs:string, favchai:string, reason:string) => {
    await registerTeaPage.setGenderRatio(gender);
    await registerTeaPage.setExperienceRatio(yrs);
    await registerTeaPage.setFavChai(favchai);
    await registerTeaPage.setReasons(reason);
});

Then(/^I select continent (.+) and commands (.+)$/, async (continent:string, command:string) => {
    await registerTeaPage.setContient(continent);
    await registerTeaPage.setCommands(command);
});

Then(/^I click on submit button$/, async () => {
    await registerTeaPage.submitForm();
});
