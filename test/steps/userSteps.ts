import { Given, When, Then } from '@cucumber/cucumber';
import UsersPage from 'src/pages/Users.page'; 
import supertest from 'supertest'
import { APICalls } from 'src/enums/APICalls';
import { BASE_URI } from 'src/config/APIConfig';
import assertions from 'src/utils/assertions';

const request = supertest(BASE_URI);
let response: supertest.Response;
const payload = {
    "name":"tester1",
    "job":"automation1"    
}

Given(/^I am on page (.+)$/, async (pageurl :string) => {
    await UsersPage.openApp(pageurl);
    await browser.pause(2500);
});

When(/^I perform (.+) user search$/, async (endpoint:string) => {
    await UsersPage.selectMethod(APICalls.GET);
    await UsersPage.enterAPIUrl(BASE_URI + endpoint);
    await UsersPage.clickOnAjaxButton();
});

When(/^I make GET (.+) api call$/, async (endpoint:string) => {
    response = await request.get(endpoint);
    // api_response = response.body;
    // api_StatusCode = response.statusCode.toString();
});

Then(/^I validate the search result$/, async () => {
    //any values getting from the website are the string values
    //So we should convert them into JSON format
    const ui_status = await UsersPage.getStatusText(); //We are getting the status code value 
    const ui_response = JSON.parse(await UsersPage.getOutputText());

    //checking the status contains the status '200'
    assertions.toContain(ui_status, response.statusCode.toString())
    assertions.toEqual(JSON.stringify(ui_response), JSON.stringify(response.body));

    assertions.toEqual(ui_response.data.email, response.body.data.email);
    assertions.toEqual(ui_response.data.first_name, response.body.data.first_name);
    assertions.toEqual(ui_response.data.last_name, response.body.data.last_name);
});

When(/^I perform create user search for api (.+)$/, async (endpoint:string) => {
    await UsersPage.selectMethod(APICalls.POST); //improvement to create an ENUM
    await UsersPage.enterAPIUrl(BASE_URI + endpoint);
    await UsersPage.clickAddParameter();
    await UsersPage.enterFirstParam("name", payload.name);
    await UsersPage.clickAddParameter();
    await UsersPage.enterSecondParam("job", payload.job);
    await UsersPage.clickOnAjaxButton();
});

When(/^I make POST (.+) api call$/, async (endpoint:string) =>  {
    console.log("To be implemented.....");
    response = await request
                    .post(endpoint)
                    .send(payload)
                    .set('content-type', 'application/json');
    console.log("API RESPONSE", response.body);
});

Then(/^I validate the create user search result$/, async () => {
    const ui_status = await UsersPage.getStatusText();
    const ui_response = JSON.parse(await UsersPage.getOutputText());

    assertions.toContain(ui_status, response.statusCode.toString());
    assertions.toContain(ui_response.name, response.body.name);
    assertions.toContain(ui_response.job, response.body.job);
});

