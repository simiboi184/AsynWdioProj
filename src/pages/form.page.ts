import Page from './page';
import {setTextValue} from 'src/utils/commands';

class formPage extends Page{

    private get firstNameField() { return $('#firstName'); }
    private get lastNameField() { return $('#lastName'); }
    private get userEmailField() { return $('#userEmail'); }
    private get mobileNoField() { return $('#userNumber'); }
    private get subjectsInput() { return $('#subjectsInput')}


    public async setNames(fname:string, lname:string){
        await setTextValue(this.firstNameField, fname);
        await setTextValue(this.lastNameField, lname);
    }

    public async setEmail(email:string){
        await setTextValue(this.userEmailField, email);
    }

    public async setMobile(number:string){
        await setTextValue(this.mobileNoField, number);
    }

    public async setSubject(subject:string){
        await setTextValue(this.subjectsInput, subject);
    }
}
export default new formPage();