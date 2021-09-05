import Page from "./page";

class WaitexPage extends Page {
    get startbtn(){ return $('#start button'); } 
    get loadingbar() { return $('#loading'); }
    get finishHeader() { return $('#finish h4'); }

    openPage(page:string){
        browser.maximizeWindow();
        browser.url(page);
    }    

}    
export default new WaitexPage();
