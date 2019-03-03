describe('Protractor Demo App', function() {

	var EC = protractor.ExpectedConditions;

	// Before all locate the Lands' End web page
	beforeEach(function() {
		browser.get('https://www.landsend.com/');
	});

	it('should search for items', function() {

		//Close the popup window advertisement
		element(by.id('closeButton')).isPresent().then(function(result) {
    			if ( result ) {
       				element(by.id('closeButton')).click();
    			} 
		});
		browser.sleep(10000);	
		
		//Give an anonymous product name as “asdffgghjkl”
		//Find the Search bar and type asdffgghjkl as searching item
		element(by.css('[ng-model="headerSearchCtrl.userInput"]')).clear().then(function(){
			element(by.css('[ng-model="headerSearchCtrl.userInput"]')).sendKeys('asdffgghjkl');
		});
		
		//Click on Search button
		var searchButton = element(by.css('[aria-label="Search"]'));
		browser.wait(EC.elementToBeClickable(searchButton), 10000).then(function(){
   			searchButton.click();		
		}).then(function(){
				console.log("Can not find item for anonymous product name.")
		});
		browser.sleep(10000);

		//Give an wrong spelling product name
		//Find the Search bar and type truoser as searching item
		element(by.css('[ng-model="headerSearchCtrl.userInput"]')).clear().then(function(){
			element(by.css('[ng-model="headerSearchCtrl.userInput"]')).sendKeys('truoser');
		});
		
		//Click on Search button
		var searchButton = element(by.css('[aria-label="Search"]'));
		browser.wait(EC.elementToBeClickable(searchButton), 10000).then(function(){
   			searchButton.click();		
		}).then(function(){
				console.log("Search for truoser adjusted your search to trouser.")
		});
		browser.sleep(10000);

		//Give an correct product name as the product name
		//Find the Search bar and type trouser as searching item
		element(by.css('[ng-model="headerSearchCtrl.userInput"]')).clear().then(function(){
			element(by.css('[ng-model="headerSearchCtrl.userInput"]')).sendKeys('trouser');
		});
		
		//Click on Search button
		var searchButton = element(by.css('[aria-label="Search"]'));
		browser.wait(EC.elementToBeClickable(searchButton), 10000).then(function(){
   			searchButton.click();		
		}).then(function(){
				console.log("Search for trouser completed.")
		});

		browser.sleep(10000);
	});

});