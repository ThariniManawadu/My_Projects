describe('Protractor Demo App', function() {
	// Before all locate the Lands' End web page
	beforeEach(function() {
		browser.get('https://www.landsend.com/');
	});

	it('should not validate password1', function() {

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

		//Set a password less than 8 charactors.		
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('modata@gmail.com');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('Abcd5');
		});

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Invalid email address Abcd5.");
		});

	});

	it('should not validate password2', function() {
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		
		//Set a password more than 20 charactors.
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('modata@gmail.com');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('Abcd5cdijnmasdfgghjjkloyreoiuytrew56789');
		});
		

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Invalid Password Abcd5cdijnmasdfgghjjkloyreoiuytrew56789.");
		});

	});

	it('should not validate password3', function() {
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		
		//Set a password without a letter.
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('modata@gmail.com');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('123456789012');
		});
		

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Invalid password 123456789012.");
		});

	});

	it('should not validate password4', function() {
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		
		//Set a password without number.
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('modata@gmail.com');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('abcdertyufghjyh');
		});

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Invalid password abcdertyufghjyh.");
		});

	});


	it('should validate password5', function() {
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		
		//Set a valid password.S
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('modata@gmail.com');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('abcdefgh1234');
		});

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Valid password abcdefgh1234.");
		});

		browser.sleep(10000);

	});
});  