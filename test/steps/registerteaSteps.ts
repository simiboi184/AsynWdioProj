import { Given, When, Then } from "@cucumber/cucumber"
import registerTeaPage from 'src/pages/registertea.page'
import report from '@wdio/allure-reporter'

Given(/^I am on practice page \"([^\"]*)\"$/, async (url:string) => {
    await browser.url(url);
    report.addStep('Registertea: opening url...');
    await browser.maximizeWindow();
    report.addStep('Registertea: maximize window...')
    await browser.pause(3500); 
    report.addStep('Registertea: pausing window...')
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
