import { APICalls } from "src/enums/APICalls";
import { clickOnBtn, setTextValue, selectVisibleText } from "src/utils/commands";
import Page from "./page";

class UsersPage extends Page {
    private get url_textbox(){  return $('#urlvalue'); }
    private get ajax_btn(){  return $('#submitajax'); }
    private get success_elem(){  return $('.alert-success'); }
    private get status_text(){  return $('#statuspre'); }
    private get output_area(){  return $('#outputpre'); }

    private get method_elem(){ return $('#httpmethod'); }
    private get addprambutton(){ return $('#addprambutton'); };
    private get paraName1_text() { 
        return $("//div[@id='allparameters']//input[contains(@class, 'fakeinputname') and @value]"); 
    }
    private get paraValue1_text() { 
        return $("//div[@id='allparameters']//input[contains(@class, 'realinputvalue') and @value]"); 
    }

    //xpath different ways of getting the values and elements in the page
    private get paraName2_text() { 
        return $("(//div[@id='allparameters']//input[contains(@class, 'fakeinputname') and @value])[2]"); 
    }
    private get paraValue2_text() { 
        return $("(//div[@id='allparameters']//input[contains(@class, 'realinputvalue') and @value])[2]"); 
    }

    async openApp(pageurl: string){
        await browser.url(pageurl);
        await browser.maximizeWindow();
    }

    async enterAPIUrl(apiendpoint:string){
        await setTextValue(this.url_textbox, apiendpoint);
    }

    async clickOnAjaxButton(){
        await clickOnBtn(this.ajax_btn);
    }

    async getStatusText(): Promise<string> {
        await (await this.success_elem).waitForDisplayed(); //portion where it return 'http 200 success'
        return (await this.status_text).getText();
    }

    async getOutputText():Promise<string> {
        return (await this.output_area).getText();
    }

    async selectMethod(apiType:APICalls){
        await selectVisibleText(this.method_elem, apiType)
    }

    async clickAddParameter(){
        await clickOnBtn(this.addprambutton);
    }

    async enterFirstParam(key:String, value:string){
        await setTextValue(this.paraName1_text, key);
        await setTextValue(this.paraValue1_text, value);
    }

    async enterSecondParam(key:string, value:string){
        await setTextValue(this.paraName2_text, key);
        await setTextValue(this.paraValue2_text, value);
    }
}
export default new UsersPage();