describe('Protractor Demo App', function() {
	// Before all locate the Lands' End web page
	beforeEach(function() {
		browser.get('https://www.landsend.com/');
	});

	it('should create an user account', function() {

		//Close the pop-up window adverticement
		element(by.id('closeButton')).isPresent().then(function(result) {
    			if ( result ) {
       				element(by.id('closeButton')).click();
    			} 
		});
		browser.sleep(10000);
	
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		

		element(by.id('fname-register')).sendKeys('Testaccount');
		element(by.id('emailAddress-register')).sendKeys('teas1234@gmail.com');		
		element(by.id('password-register')).sendKeys('12345689jgd');
		element(by.css('[data-password-id="password-register"]')).click();

		browser.switchTo().frame(0).then(function () {
			browser.ignoreSynchronization = true;
   			var checkmark = element(by.css('.recaptcha-checkbox-checkmark'));
  			checkmark.click();
    			browser.ignoreSynchronization = false;

    			browser.switchTo().defaultContent();
			browser.waitForAngular();
			element(by.css('.g-recaptcha')).click();
		});

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Should perform on reCAPTCHA before create an account.");
		});

	});
});  