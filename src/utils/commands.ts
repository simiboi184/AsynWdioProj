export const selectDropdown = async (elements: Promise<WebdriverIO.ElementArray>, value) => {
    const element = await elements;
    for (let i = 0; i < element.length; i++) {
        const ele = await element[i].getAttribute('value');
        if (ele === value) {
            await element[i].click();
            await browser.pause(2000);
            break;
        }
    }
}

export const setTextValue = async (element: Promise<WebdriverIO.Element>, text: string) => {
    //await (await element).setValue(text);
    await element.setValue(text);
}

export const selectVisibleText = async (element: Promise<WebdriverIO.Element>, text: string) => {
    //await (await element).selectByVisibleText(text);
    await element.selectByVisibleText(text);
}

export const clickOnBtn = async (element: Promise<WebdriverIO.Element>) => {
    //await (await element).click();
    await element.click();
}