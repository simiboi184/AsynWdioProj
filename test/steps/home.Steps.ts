import { Given, When, Then } from '@cucumber/cucumber';
import assertions from 'src/utils/assertions';
//import HomePage from 'src/pages/home.page';

Given(/^I open the browser and load the url (.+)$/, async (url:string)=> {
    browser.url(url);
    browser.maximizeWindow();
});

Then(/^I should see a header with text (.+)$/, async (headertext:string)=>{
    //const pageHeaderText = $('//h1');
    //expect(await pageHeaderText.getText()).toEqual(headertext);
    //await expect(pageHeaderText).toHaveText(headertext);
    
    const header = $('.heading');
    await assertions.toHaveText(header, headertext);
});