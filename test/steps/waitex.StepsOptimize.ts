import { Given, When, Then} from "@cucumber/cucumber";
import { clickOnBtn } from "src/utils/commands";
import waitexPage from "src/pages/waitex.page"

//https://www.youtube.com/watch?v=gAuCLUO08PI&t=35s
//Part13: Webdriverio with Typescript - Gherkin Intellisense >> https://www.youtube.com/watch?v=6FECa3952Wg
// - bring you to steps implementations.. >> settings.json

Given(/^I am on dynamic loading (.+) page$/, async (page:string) => {
    await waitexPage.openPage(page);
});

When(/^I click on start button$/, async () => {
    await waitexPage.startbtn.click();        
});

Then(/^I validate loading icon$/, async () => {
    await waitexPage.loadingbar.waitForDisplayed({timeout: 7500});
    await waitexPage.loadingbar.waitForDisplayed({reverse: true, timeout: 7500, timeoutMsg:"We can input some error message ......"}); //doing an reverse, we are expecting for disappear after 7.5 secs, similar timeoutMsg can be apply for other functions..

    //await (await finishHeader).waitForDisplayed({timeout:10000});
    // await (await finishHeader).getText() ==='Hello World' ===> boolean condition! in the first argument!
    await browser.waitUntil( async () => await waitexPage.finishHeader.getText() ==='Hello World!', {
        timeout: 10000,
        timeoutMsg: "wait until >>> this element is not displayed !!! Need longer time !"
    }); 
    await expect(waitexPage.finishHeader).toBeDisplayed(); //how long will it wait 10000 seconds
});