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
		

		element(by.id('fname-register')).sendKeys('');
		element(by.id('emailAddress-register')).sendKeys('');		
		element(by.id('password-register')).sendKeys('');
		element(by.css('[data-password-id="password-register"]')).click();

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("All the mandotory fields should be filled.")
		});

	});
});  