describe("Sample tests for checkbox", ()=>{

    it("First Sample test for checkbox", ()=>{
        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnRadioButton = $("//span[contains(text(),'Broken Links - Images')]");
        btnRadioButton.scrollIntoView();
        btnRadioButton.click();
        btnRadioButton.getElement


        const allLinks = $$('a');

        const allhref = allLinks.map(element => {
            //console.log(element.getAttribute('href'));
            return element.getAttribute('href')

        });

        const request = allhref.map(url=>{fetch(url)});
        
        console.log("This is ----------------->:"+request)
        const response = Promise.all(request);

        console.log("This is what am looking for:"+response)



        const statusCode = response.map(code=>{code.statusCode});

        console.log(statusCode);



        
    });

});