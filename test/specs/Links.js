describe("Sample tests for Links", ()=>{

    it("First Sample test for Links", ()=>{

        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnRadioButton = $("//span[contains(text(),'Links')]");
        btnRadioButton.scrollIntoView();
        btnRadioButton.click();

        const lnkHome = $('=Home');
        lnkHome.click();

        const textTitle = browser.getTitle();

        const winHandle = browser.getWindowHandles();

        browser.switchToWindow(winHandle[1]);

        //const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        //const btnRadioButton = $("//span[contains(text(),'Links')]");
        btnRadioButton.scrollIntoView();
        btnRadioButton.click();

        //browser.pause(5000);

        browser.closeWindow();

        //browser.switchToWindow(winHandle[0]);
        browser.switchWindow(textTitle);

        const btnCreate = $('=Created');

        btnCreate.click();

        //browser.pause(10000);
    });

});