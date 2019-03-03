describe('Protractor Demo App', function() {

	var EC = protractor.ExpectedConditions;

	// Before all locate the Lands' End web page
	beforeEach(function() {
		browser.get('https://www.landsend.com/');
	});

	it('should signIn to account', function() {

		//Close the popup window advertisement
		element(by.id('closeButton')).isPresent().then(function(result) {
    			if ( result ) {
       				element(by.id('closeButton')).click();
    			} 
		});
		browser.sleep(10000);
	
		//Click on to select dropdown list that have link to Sign in
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		
		//Click on sign in link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(0);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});

		element(by.id('maForgotPasswordReset')).click().then(function(){
			console.log("Successfully navigated to create account page.");
		});

		
		
		browser.sleep(10000);
	});
});
