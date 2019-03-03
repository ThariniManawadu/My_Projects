describe('Protractor Demo App', function() {

	var EC = protractor.ExpectedConditions;

	// Before all locate the Lands' End web page
	beforeEach(function() {
		browser.get('https://www.landsend.com/');
	});

	it('should not signIn to account1', function() {

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

		//Check for user sign in by giving invalid email and correct password.
		element(by.id('emailAddress-login')).clear().then(function() {
			element(by.id('emailAddress-login')).sendKeys('modatath12345th@gmail.com');
		});
		element(by.id('password-login')).clear().then(function() {
			element(by.id('password-login')).sendKeys('abcdefgh1234');
		});

		//Click on Sign In button
		browser.wait(EC.elementToBeClickable(element(by.name('Log_me_in.x'))), 10000).then(function(){
   			element(by.name('Log_me_in.x')).click();	
		}).then(function(){
			console.log("Could not Sign in, check on credentials.")
		});
		browser.sleep(10000);
	});

	it('should signIn to account2', function() {

		//Click on to select dropdown list that have link to Sign in
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		
		//Click on sign in link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(0);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});

		//Check for user sign in by giving blank email and correct password.
		element(by.id('emailAddress-login')).clear().then(function() {
			element(by.id('emailAddress-login')).sendKeys('');
		});
		element(by.id('password-login')).clear().then(function() {
			element(by.id('password-login')).sendKeys('abcdefgh1234');
		});

		//Click on Sign In button
		browser.wait(EC.elementToBeClickable(element(by.name('Log_me_in.x'))), 10000).then(function(){
   			element(by.name('Log_me_in.x')).click();	
		}).then(function(){
			console.log("Could not Sign in, check on credentials.")
		});
		browser.sleep(20000);
	});

});  