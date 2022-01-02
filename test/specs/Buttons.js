const { assert } = require("chai");

describe("Sample tests for Button",()=>{

    it("First Sample test for Button",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnRadioButton = $("//span[contains(text(),'Buttons')]");
        btnRadioButton.scrollIntoView();
        btnRadioButton.click();

        const btnDoubleClick = $('#doubleClickBtn');
        btnDoubleClick.doubleClick();

        const textDoubleClick = $('#doubleClickMessage');
        assert.equal("You have done a double click", textDoubleClick.getText());
        console.log(textDoubleClick.getText());

        const btnRightClick = $('#rightClickBtn');
        btnRightClick.click({button:'right'});

        const testRightClick = $('#rightClickMessage');
        assert.equal("You have done a right click", testRightClick.getText());
        console.log(testRightClick.getText());

        //browser.pause(5000);
    });
});