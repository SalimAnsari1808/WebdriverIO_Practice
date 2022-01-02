describe("Sample tests for Browser Window",()=>{

    it("First Sample test for Browser Window",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnAlertFrameWindow = $("//h5[text()='Alerts, Frame & Windows']");
        btnAlertFrameWindow.scrollIntoView();
        btnAlertFrameWindow.click();

        const btnBrowserWindow = $("//span[contains(text(),'Browser Windows')]");
        btnBrowserWindow.scrollIntoView();
        btnBrowserWindow.click();
        const btnNewTab = $('#tabButton');
        btnNewTab.click();

        const windowHandles = browser.getWindowHandles();
        console.log("WindowHandles------>",windowHandles)
        browser.switchToWindow(windowHandles[1]);

        const testSampleText = $('#sampleHeading');
        console.log(testSampleText.getText());
        browser.closeWindow();
        browser.switchToWindow(windowHandles[0]);
    });

    it("Second Sample test for Browser Window",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnAlertFrameWindow = $("//h5[text()='Alerts, Frame & Windows']");
        btnAlertFrameWindow.scrollIntoView();
        btnAlertFrameWindow.click();

        const btnBrowserWindow = $("//span[contains(text(),'Browser Windows')]");
        btnBrowserWindow.scrollIntoView();
        btnBrowserWindow.click();
        const btnNewWindow = $('#windowButton');
        btnNewWindow.click();

        const windowHandles = browser.getWindowHandles();
        console.log("WindowHandles------>",windowHandles)
        browser.switchToWindow(windowHandles[1]);

        const testSampleText = $('#sampleHeading');
        console.log(testSampleText.getText());
        browser.closeWindow();
        browser.switchToWindow(windowHandles[0]);
    });

    it("Third Sample test for Browser Window",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnAlertFrameWindow = $("//h5[text()='Alerts, Frame & Windows']");
        btnAlertFrameWindow.scrollIntoView();
        btnAlertFrameWindow.click();

        const btnBrowserWindow = $("//span[contains(text(),'Browser Windows')]");
        btnBrowserWindow.scrollIntoView();
        btnBrowserWindow.click();
        const btnNewMessageWindow = $('#msgWindowButtonWrapper');
        btnNewMessageWindow.click();

        const windowHandles = browser.getWindowHandles();
        console.log("WindowHandles------>",windowHandles)
        //browser.switchToWindow(windowHandles[1]);

        //const testSampleText = $('//body');
        //console.log(testSampleText.getText());
        //browser.closeWindow();
        //browser.switchToWindow(windowHandles[0]);
    });
});