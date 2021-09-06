import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio";

export const selectDropdown = async (elements: ChainablePromiseArray<ElementArray>, value) => {
    for (let i = 0; i < await (await elements).length; i++) {
        const ele = await (await elements[i]).getAttribute('value');
        if (ele === value) {
            await (await elements[i]).click();
            break;
        }
    }
}

export const setTextValue = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    //await (await element).setValue(text);
    await element.setValue(text);
}

export const selectVisibleText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    //await (await element).selectByVisibleText(text);
    await element.selectByVisibleText(text);
}

export const clickOnBtn = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    //await (await element).click();
    await element.click();
}