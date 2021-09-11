import { Then } from "@cucumber/cucumber";
import fs from 'fs';
import path from 'path';
import { DOWNLOAD_FOLDER_PATH } from "src/constants/pathconsts";
import { deleteDirectory } from "src/utils/fileutils";
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

Then (/^I validate downloaded file extension$/, async() => {
    const extensions = ['.jgeg', '.txt', '.pdf', '.png', '.json', '.jpg'];
    const files = fs.readdirSync(DOWNLOAD_FOLDER_PATH);
    
    //path.extname(files[0]);//return you the first list of the files, the FIRST one.
    files.forEach(file => {
        expect(extensions).toContain(path.extname(file));
    });
    deleteDirectory(DOWNLOAD_FOLDER_PATH);

});