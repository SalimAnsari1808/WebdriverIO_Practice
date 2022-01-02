const fetch = require("node-fetch");

describe('Hello World',()=>{

    it('Fetch API test case',()=>{
        browser.url('https://dev.grsondemand.com');
        browser.setupInterceptor(); // capture ajax calls
        browser.expectRequest('GET', '/logos/logo-grs.png', 200); // expect GET request to 
    });



});