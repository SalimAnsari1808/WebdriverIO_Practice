describe("Sample tests for Alerts",()=>{

    it.skip("First Sample test for Alerts",()=>{

        browser.url('/');
        browser.maximizeWindow();

        const btnAlertFrameWindow = $("//h5[text()='Alerts, Frame & Windows']");
        btnAlertFrameWindow.scrollIntoView();
        btnAlertFrameWindow.click();

        const btnBrowserWindow = $("//span[contains(text(),'Alerts')]");
        btnBrowserWindow.scrollIntoView();
        btnBrowserWindow.click();

        const btnAlert = $('#alertButton');
        btnAlert.click();

        browser.waitUntil(()=>{
            return browser.isAlertOpen()
        }, 6000);

        browser.pause(1000);
        browser.acceptAlert();
    });

    it("Second Sample test for Alerts",()=>{

        browser.addCommand('waitForAlert', ()=>{
            browser.waitUntil(()=>{
                try {
                    browser.getAlertText();
                    return true;
                } catch (error) {
                    return false;
                }
                //return browser.isAlertOpen()
            }, 6000);

        })

        browser.url('/');
        browser.maximizeWindow();
        //console.log("Running in current Browser---->",browser.capabilities.browserName)

        const btnAlertFrameWindow = $("//h5[text()='Alerts, Frame & Windows']");
        btnAlertFrameWindow.scrollIntoView();
        btnAlertFrameWindow.click();

        const btnBrowserWindow = $("//span[contains(text(),'Alerts')]");
        btnBrowserWindow.scrollIntoView();
        btnBrowserWindow.click();

        const btnTimerAlert = $('#timerAlertButton');
        btnTimerAlert.click();

        //if(browser.capabilities.browserName == "chrome"){
            browser.waitForAlert();
        //}else{
        //    browser.pause(6000);
        //}
        
        browser.pause(1000);
        browser.acceptAlert();
    });

    it.skip("Third Sample test for Alerts",()=>{

        browser.url('/');
        browser.maximizeWindow();

        const btnAlertFrameWindow = $("//h5[text()='Alerts, Frame & Windows']");
        btnAlertFrameWindow.scrollIntoView();
        btnAlertFrameWindow.click();

        const btnBrowserWindow = $("//span[contains(text(),'Alerts')]");
        btnBrowserWindow.scrollIntoView();
        btnBrowserWindow.click();

        const btnConfirmAlert = $('#confirmButton');
        btnConfirmAlert.click();
        
        browser.waitUntil(()=>{
            return browser.isAlertOpen()
        }, 6000);

        browser.pause(1000);
        browser.acceptAlert();

        btnConfirmAlert.click();
        
        browser.waitUntil(()=>{
            return browser.isAlertOpen()
        }, 6000);

        browser.pause(1000);
        browser.dismissAlert();
    });

    it.skip("Fourth Sample test for Alerts",()=>{

        browser.url('/');
        browser.maximizeWindow();

        const btnAlertFrameWindow = $("//h5[text()='Alerts, Frame & Windows']");
        btnAlertFrameWindow.scrollIntoView();
        btnAlertFrameWindow.click();

        const btnBrowserWindow = $("//span[contains(text(),'Alerts')]");
        btnBrowserWindow.scrollIntoView();
        btnBrowserWindow.click();

        const btnPromtAlert = $('#promtButton');
        btnPromtAlert.click();

        browser.waitUntil(()=>{
            return browser.isAlertOpen()
        }, 6000);

        
        browser.sendAlertText("Hello World");
        browser.pause(5000);
        browser.acceptAlert();

        btnPromtAlert.click();

        browser.waitUntil(()=>{
            return browser.isAlertOpen()
        }, 6000);

        
        browser.sendAlertText("Hello World");
        browser.pause(5000);
        browser.dismissAlert();
    });
});