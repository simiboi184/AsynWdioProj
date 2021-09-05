import { Given, When, Then} from "@cucumber/cucumber";

Given(/^I open app url$/, async()=>{
    await browser.maximizeWindow();
    await browser.url('/');
    await browser.pause(3500);
});

Then(/^I retrieve browser title$/, async()=>{
    const title = await browser.getTitle();
    console.log("Title of the browser >>>> ", title);
});
    