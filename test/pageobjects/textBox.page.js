const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TextBoxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFullName() { return $('#userName') }
    get inputEmail () { return $('#userEmail') }
    get inputCurrentAddress () { return $('#currentAddress') }
    get inputPermanentAddress() {return $('#permanentAddress')}
    get btnSubmit() {return $('#submit')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    fillForm(fullName, email, currentAddress, permanentAddress){
        //this.inputFullName().SetValue(fullName);

    }
   

    clickSubmitButton(){
        this.btnSubmit().click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('text-box');
    }
}

module.exports = new TextBoxPage();
