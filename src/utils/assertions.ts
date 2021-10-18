import { ChainablePromiseElement } from "webdriverio";
import { addLog } from "./commands";

class Assertions {

    //overloading method add new type "string[]", means this function accept either string or string[]
    toContain(actual:string | string[], expected:string){
        expect(actual).toContain(expected); 
        addLog(`Assertion >> ${actual} to contain ${expected}`);
    }

    toEqual(actual:string, expected:string){
        expect(actual).toEqual(expected); 
        addLog(`Assertion >> ${actual} to equal ${expected}`);
    }

    async toHaveText(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>, expectedText:string){
        await expect(element).toHaveText(expectedText);
        addLog(`Assertion >> ${await element.selector} is having text ${expectedText}`);
    }

    async toBeExisting(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>){
        await expect(element).toBeExisting();
        addLog(`Assertion >> ${await element.selector} is Existing`);
    }

    async toHaveTextContaining(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>, expectedText:string){
        await expect(element).toHaveText(expectedText);
        addLog(`Assertion >> ${await element.selector} is containing the text ${expectedText}`);
    }

    async tobeDisplayed(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>){
        await expect(element).toBeDisplayed();
        addLog(`Assertion >> ${await element.selector} is Displayed`);
    }
    
}
export default new Assertions();