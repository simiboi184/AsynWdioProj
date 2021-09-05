import { Given, When, Then } from "@cucumber/cucumber"
import formPage from 'src/pages/form.page'
import formdata from '../resources/formdata.json';
import  fs from 'fs';

let timePause = 3000;

//https://www.youtube.com/watch?v=QauiN7jZVfo&t=10s
Given(/^I am on form page \"([^\"]*)\"$/, async (practiceform: string) => {
    await browser.url(practiceform);
    await browser.pause(timePause);
});

//Always will be reading from the formdata.json file ONLY
When(/^I enter all mandate fields$/, async () => {
    await formPage.setNames(formdata.firstname, formdata.lastname);
    await formPage.setEmail(formdata.email);
    await formPage.setMobile(formdata.mobileno);
    await formPage.setSubject(formdata.subject);
    await browser.pause(timePause);
});

//More robust reading the data path and convert the string filesystem fs... 
//JSONFile will not have the 'auto suggestion'
When(/^I enter all mandate fields from (.+)$/, async (datapath:string) => {
    let data = JSON.parse(fs.readFileSync(datapath, "utf-8"));
    await formPage.setNames(data.firstname, data.lastname);
    await formPage.setEmail(data.email);
    await formPage.setMobile(data.mobileno);
    await formPage.setSubject(data.subject);
    await browser.pause(timePause);
});
    