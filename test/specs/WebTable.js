describe("Sample tests for WebTable",()=>{

    it("First Sample test for WebTable",()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnRadioButton = $("//span[contains(text(),'Web Tables')]");
        btnRadioButton.scrollIntoView();
        btnRadioButton.click();


        for(var i=0;i<50;i++){
            const btnAdd = $('#addNewRecordButton');
        btnAdd.click();

        const inputFirstName = $('#firstName');
        inputFirstName.setValue("Salim");

        const inputLastName = $('#lastName');
        inputLastName.setValue("Ansari");

        const inputEmail =$('#userEmail');
        inputEmail.setValue("salimansari@gmail.com");

        const inputAge = $('#age');
        inputAge.setValue("25");

        const inputSalary = $('#salary');
        inputSalary.setValue("2500");

        const inputDepartment = $('#department');
        inputDepartment.setValue("Automation");

        const btnSubmit = $('#submit');
        btnSubmit.click();

        }

        const textGridCell = $$("//div[@role='gridcell']");

        textGridCell.forEach(gridcell => console.log(gridcell.getText()))

        //browser.pause(10000);
    });

});