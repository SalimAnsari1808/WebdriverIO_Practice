describe("Sample tests for Nested Frames",()=>{
    it("First Sample test for Nested Frames",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnAlertFrameWindow = $("//h5[text()='Alerts, Frame & Windows']");
        btnAlertFrameWindow.scrollIntoView();
        btnAlertFrameWindow.click();

        const btnBrowserWindow = $("//span[contains(text(),'Nested Frames')]");
        btnBrowserWindow.scrollIntoView();
        btnBrowserWindow.click();

        const btnParentFrame = $('#frame1')

        browser.switchToFrame(btnParentFrame);

        console.log($('//body').getText());

        browser.switchToFrame(0);

        console.log($('//body').getText());

        browser.pause(5000);
    });
});