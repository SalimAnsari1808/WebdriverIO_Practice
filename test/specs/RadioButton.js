describe("Sample tests for Radio Button",()=>{
    it("First Sample test for Radio Button",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnRadioButton = $("//span[contains(text(),'Radio Button')]");
        btnRadioButton.click();

        const rdbtnYes = $("//label[@for='yesRadio']");
        if(rdbtnYes.isEnabled()){
            rdbtnYes.click();
        }

        const rdbtnImpressive = $("//label[@for='impressiveRadio']");
        if(rdbtnImpressive.isEnabled()){
            rdbtnImpressive.click();
        }
        
        const rdbtnNo = $("//label[@for='noRadio']");
        if(rdbtnNo.isEnabled()){
            rdbtnNo.click();
        }

        //browser.pause(5000)


    });
});