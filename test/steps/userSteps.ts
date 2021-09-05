import { Given, When, Then } from '@cucumber/cucumber';
import UsersPage from 'src/pages/Users.page'; 
import supertest from 'supertest'
import { APICalls } from 'src/enums/APICalls';
import { BASE_URI } from 'src/config/APIConfig';

const request = supertest(BASE_URI);

let response: supertest.Response;
const payload = {
    "name":"tester1",
    "job":"automation1"    
}

// let api_response:any;
// let api_StatusCode:any;

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
    console.log("STATUS FROM URI: ", ui_status);

    const ui_response = JSON.parse(await UsersPage.getOutputText());
    console.log("RESPONSE FROM URI: ", ui_response);

    expect(ui_status).toContain(response.statusCode.toString()); //checking the status contains the status '200'
    //expect(ui_status).not.toContain('500'); //Just a counter check that expecting that the value is wrong 500
    expect(ui_response).toEqual(response.body);

    //Now checking the JSON contains the email parameters or first name or lastname
    console.log("UI EMAIL: ", ui_response.data.email);
    console.log("UI first_name: ", ui_response.data.first_name);
    console.log("UI last_name: ", ui_response.data.last_name);
    
    console.log("API EMAIL: ", response.body.data.email);
    console.log("API first_name: ", response.body.data.first_name);
    console.log("API last_name: ", response.body.data.last_name);
    
    expect(ui_response.data.email).toEqual(response.body.data.email);
    expect(ui_response.data.first_name).toEqual(response.body.data.first_name);
    expect(ui_response.data.last_name).toEqual(response.body.data.last_name);
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
   
  
    //send payload, setting it tell that its' a json format
    response = await request
                    .post(endpoint)
                    .send(payload)
                    .set('content-type', 'application/json');
    //response will return you the actual 
    console.log("API RESPONSE", response.body);
});

Then(/^I validate the create user search result$/, async () => {
    const ui_status = await UsersPage.getStatusText();
    const ui_response = JSON.parse(await UsersPage.getOutputText());

    console.log("UI RESPONSE", ui_response.body);
    console.log("API RESPONSE", response.body);

    expect(ui_status).toContain(response.statusCode.toString());
    expect(ui_response.name).toEqual(response.body.name); //name and job have to follow strictly what is mentioned in website
    expect(ui_response.job).toEqual(response.body.job);
});

