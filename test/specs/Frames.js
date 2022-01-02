describe("Sample tests for Frames",()=>{

    

    it("First Sample test for Frames",()=>{
        browser.url('https://the-internet.herokuapp.com/nested_frames');
        browser.maximizeWindow();

        const firstFrame = $('#frame1');
        browser.switchToFrame(0);
        browser.switchToFrame(1);

        const samplePage = $('//body');
        console.log(samplePage.getText());

        browser.switchToParentFrame();
        browser.switchToFrame(1);
        console.log(samplePage.getText());

        browser.switchToParentFrame();
        console.log(browser.getUrl());
    });
});
