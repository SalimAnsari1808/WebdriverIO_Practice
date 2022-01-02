
// const LoginPage = require('../pageobjects/textBox.page');
// const SecurePage = require('../pageobjects/secure.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', () => {
//         LoginPage.open();

//         LoginPage.login('tomsmith', 'SuperSecretPassword!');
//        expect(SecurePage.flashAlert).toBeExisting();
//        expect(SecurePage.flashAlert).toHaveTextContaining(
//            'You logged into a secure area!');
//     });
// });


describe('First Program in WebDriverIo', function(){

    it('First Sample Test',function(){

        browser.url('/');
        browser.maximizeWindow();

        const btnElements = $("//h5[text()='Elements']");
        btnElements.scrollIntoView();
        btnElements.click();

        const btnTextBox = $("//li[@id='item-0']/span[contains(text(),'Text Box')]");
        btnTextBox.click();

        const inputFullName =  $('#userName') ;
        inputFullName.setValue("Salim Ansari");

        const inputEmail = $('#userEmail');
        inputEmail.setValue("salim.ansari.bcs@gmail.com");

        const inputCurrentAddress = $('#currentAddress');
        inputCurrentAddress.setValue("Bindapur New Delhi");

        const inputPermanentAddress = $('#permanentAddress');
        inputPermanentAddress.setValue("Swaroop Nagar Kanpur");

        const btnSubmit = $('#submit');
        btnSubmit.scrollIntoView();
        btnSubmit.click();

        //browser.pause(5000);

    });
});