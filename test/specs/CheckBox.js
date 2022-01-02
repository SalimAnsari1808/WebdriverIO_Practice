describe("Sample tests for checkbox", ()=>{

    it("First Sample test for checkbox", ()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnCheckBox = $("//span[contains(text(),'Check Box')]");
        btnCheckBox.click();

        const btnHome = $("//span[text()='Home']/../../button");
        btnHome.click();

        const btnDownLoads = $("//span[text()='Downloads']/../../button");
        btnDownLoads.click();

        const chkbxWordFile = $("//span[contains(text(),'Word File')]");
        chkbxWordFile.click();











    });

});