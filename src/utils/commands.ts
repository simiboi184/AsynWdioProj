import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio";
import report from '@wdio/allure-reporter';

export const addLog = (log:string) => {
    report.addStep(`STEP: ${log}`);    
    console.log(`STEP: ${log}`);
}

export const selectDropdown = async (elements: ChainablePromiseArray<ElementArray>, value) => {
    for (let i = 0; i < await (await elements).length; i++) {
        const ele = await (await elements[i]).getAttribute('value');
        if (ele === value) {
            await (await elements[i]).click();
            addLog(`Selected dropdown value: ${value}`);
            break;
        }
    }
}

export const setTextValue = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    //await (await element).setValue(text);
    await element.setValue(text);
    addLog(`Entered value: ${text}`);
}

export const selectVisibleText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    //await (await element).selectByVisibleText(text);
    await element.selectByVisibleText(text);
    addLog(`Selected by Visible Text: ${text}`)
}

export const clickOnBtn = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    //await (await element).click();
    await element.click();
    addLog(`Clicked on Element: ${await element.selector}`)

}