import { Then } from "@cucumber/cucumber";

/*
Notice that you did not repeat the first statement, because you already created it before already.
*/
Then (/^I click on first file$/, async() => {
    //this means it will always grab this particular file name, in case the website changed, this will failed.
    //const firstFile = $("//a[@href=download/568508_568508_Screen Shot 2021-05-24 at 7.44.04 AM.png");
    
    //this will be more robust/dynamic, grabbing the first element that the pages can be found...
    const firstFile = $("//a[contains(@href, 'download')]");
    await firstFile.click();
    await browser.pause(3000);

    /*
    in case the file downloaded in the download directory, shows the extension ".crdownload" means that the file download incompleted. this could due to higher time needed.
    */
});