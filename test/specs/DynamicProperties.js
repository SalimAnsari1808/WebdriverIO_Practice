describe("Sample test cases for Dynamic Properties", ()=>{
    it("First Sample test case Dynamic Properties",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnDynamicProperties = $("//span[contains(text(),'Dynamic Properties')]");
        btnDynamicProperties.scrollIntoView();
        btnDynamicProperties.click();

        const btnEnable = $('#enableAfter');
        console.log(btnEnable.isClickable());
        btnEnable.waitForClickable(5000);
        console.log(btnEnable.isClickable());
    })


    it("Second Sample test case Dynamic Properties",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnDynamicProperties = $("//span[contains(text(),'Dynamic Properties')]");
        btnDynamicProperties.scrollIntoView();
        btnDynamicProperties.click();

        const btnChangeColor = $('#colorChange');
        let color = btnChangeColor.getCSSProperty('color');

        btnChangeColor.waitUntil(function(){  
            color = btnChangeColor.getCSSProperty('color').then((value)=>{
                expectedValue = value
            })
            return expectedValue.parsed.hex === "#dc3545";
        } ,{ timeout:10000, timeoutMsg: "Color change is not occur" })

        color = btnChangeColor.getCSSProperty('color')
        console.log('Color After---->',(color.parsed.hex));
    })

    it("Third Sample test case Dynamic Properties",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnDynamicProperties = $("//span[contains(text(),'Dynamic Properties')]");
        btnDynamicProperties.scrollIntoView();
        btnDynamicProperties.click();

        const btnVisibleAfter = $('#visibleAfter');
        btnVisibleAfter.waitForDisplayed(6000);
        console.log(btnVisibleAfter.isDisplayed());

    })
})