import { Given, When, Then } from '@cucumber/cucumber';
//import HomePage from 'src/pages/home.page';

Given(/^I open the browser and load the url (.+)$/, async (url:string)=> {
    browser.url(url);
    browser.maximizeWindow();
});

Then(/^I should see a header with text (.+)$/, async (headertext:string)=>{
    const pageHeaderText = $('//h1');
    expect(await pageHeaderText.getText()).toEqual(headertext);
});