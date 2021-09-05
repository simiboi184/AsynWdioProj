import { clickOnBtn, selectDropdown, selectVisibleText, setTextValue } from "src/utils/commands"
import Page from "./page";

class RegisterTeaPage extends Page {

    private get headerText() { return $("//h1"); }
    private get fname_input() { return $('[name=firstname]'); }
    private get lname_input() { return $('[name=lastname]'); }

    private get gender_ratio() { return $$('[name=sex]'); }
    private get experience_ratio() { return $$('[name=exp]'); }
    private get favchai_ratio() { return $$('input[name*=Tea]'); }
    private get reason_checkbox() { return $$('[name=tool]'); }

    private get continent_dp() { return $('#continents'); }
    private get selenium_cmd() { return $('#selenium_commands'); }

    private get submit_btn() { return $('#submit'); }

    public async setFirstAndLastName(firstname: string, lastname: string) {
        //await (await this.fname_input).setValue(firstname);
        //await (await this.lname_input).setValue(lastname);
        await setTextValue(this.fname_input, firstname);
        await setTextValue(this.lname_input, lastname);
    }

    // private async selectOptions(element: WebdriverIO.ElementArray, value: string) {
    //     for (let i = 0; i < element.length; i++) {
    //         const ele = await element[i].getAttribute('value');
    //         if (ele === value) {
    //             await element[i].click(); 
    //             await browser.pause(2000);
    //             break;
    //         }
    //     }
    // }

    public async setGenderRatio(gender:string){
        // await this.selectOptions(await this.gender_ratio, gender);
        await selectDropdown(this.gender_ratio, gender);
    }

    public async setExperienceRatio(exp:string){
        // await this.selectOptions(await this.experience_ratio, exp);
        await selectDropdown(this.experience_ratio, exp);
    }

    public async setFavChai(favchai:string){
        // await this.selectOptions(await this.favchai_ratio, favchai);
        await selectDropdown(this.favchai_ratio, favchai);
    }

    public async setReasons(reason:string){
        //await this.selectOptions(await this.reason_checkbox, reason);
        await selectDropdown(this.reason_checkbox, reason);
    }

    public async setContient(continent: string) {
        //await (await this.continent_dp).selectByVisibleText(continent);
        await selectVisibleText(this.continent_dp, continent);
    }

    public async setCommands(command: string) {
        // await (await this.selenium_cmd).selectByVisibleText(command);
        await selectVisibleText(this.selenium_cmd, command);
    }

    public async submitForm() {
        //await (await this.submit_btn).click();
        await clickOnBtn(this.submit_btn);
    }

    public async validatePageForms(pageHeader: string) {
        await expect(this.headerText.getText()).toEqual(pageHeader);
    }
}
export default new RegisterTeaPage();