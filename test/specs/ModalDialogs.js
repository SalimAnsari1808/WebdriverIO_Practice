describe("Sample tests for Modal Dialogs",()=>{

    it("First Sample test for Modal Dialogs",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnAlertFrameWindow = $("//h5[text()='Alerts, Frame & Windows']");
        btnAlertFrameWindow.scrollIntoView();
        btnAlertFrameWindow.click();

        const btnBrowserWindow = $("//span[contains(text(),'Modal Dialogs')]");
        btnBrowserWindow.scrollIntoView();
        btnBrowserWindow.click();

        const btnSmallModel = $('#showSmallModal');
        btnSmallModel.click();

        const textModelHeader = $('#example-modal-sizes-title-sm');
        console.log(textModelHeader.getText());

        const textModelBody = $('.modal-body');
        console.log(textModelBody.getText());

        const btnModelClose = $('#closeSmallModal')
        btnModelClose.click();
    });
});