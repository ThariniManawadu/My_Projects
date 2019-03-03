describe('Protractor Demo App', function() {
	// Before all locate the Lands' End web page
	beforeEach(function() {
		browser.get('https://www.landsend.com/');
	});

	it('should not validate email address1', function() {

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
		
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('modatagmail.com');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('abcdefgh1234');
		});

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Invalid email address modatagmail.com");
		});

	});

	it('should not validate email address2', function() {
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('modataatgmail.com');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('abcdefgh1234');
		});
		

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Invalid email address amodataatgmail.com.");
		});

	});

	it('should not validate email address3', function() {
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('abcdefghihkvvdvv@gmail.com');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('abcdefgh1234');
		});
		

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Invalid email address abcdefghihkvvdvv@gmail.com.");
		});

	});

	it('should not validate email address4', function() {
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('modata@gmail.abcfghjkl');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('abcdefgh1234');
		});

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Invalid email address modata@gmail.abcfghjkl.");
		});

	});

	it('should not validate email address5', function() {
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		
		element(by.id('fname-register')).clear().then(function(){	
			element(by.id('fname-register')).sendKeys('Modata');
		});
		element(by.id('emailAddress-register')).clear().then(function(){
			element(by.id('emailAddress-register')).sendKeys('modata@gmailcom');
		});	
		element(by.id('password-register')).clear().then(function(){	
			element(by.id('password-register')).sendKeys('abcdefgh1234');
		});

		browser.wait(EC.elementToBeClickable(element(by.name('Create_Account.x'))), 10000).then(function(){
   			element(by.name('Create_Account.x')).click();		
		}).then(function(){
			console.log("Invalid email address modata@gmailcom.");
		});

	});

	it('should not validate email address6', function() {
		//Click on to select dropdown list that have link to create an account
		browser.actions().mouseMove(element(by.css('.sign-in-name'))).perform();
		var EC = protractor.ExpectedConditions;
		
		//Click on Create account link
		var signInLink = element(By.css('.user-log-in-menu')).all(By.tagName('a')).get(1);
		browser.wait(EC.elementToBeClickable(signInLink), 10000).then(function(){
   			signInLink.click();		
		});
		
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
			console.log("Valid email address modata@gmail.com.");
		});

	});
});  