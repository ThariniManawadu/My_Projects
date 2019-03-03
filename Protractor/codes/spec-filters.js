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

		//Find the Search bar and type blouse as searching item
		element(by.css('[ng-model="headerSearchCtrl.userInput"]')).sendKeys('blouse');
		
		//Click on Search button
		var searchButton = element(by.css('[aria-label="Search"]'));
		browser.wait(EC.elementToBeClickable(searchButton), 10000).then(function(){
   			searchButton.click();		
		});

		//Verify whether it reached the correct searched page
		browser.wait(function() { 
			return browser.getCurrentUrl().then(function(url) { 
				return (url.indexOf(browser.baseUrl + 'shop/search?initialSearch=true&Ntt=blouse') !== -1);
			}); 
		}); 

		//Add filters to the search
		
		//Select brand Lands' End 
		var selectBrand = element(By.css('[aria-label="lands\' end "]'));
		browser.wait(EC.elementToBeClickable(selectBrand), 10000).then(function(){
   			selectBrand.click();		
		}).then(function(){
			console.log("Correctly applied Lands' End filter from brands.");
		});


		//Select Catogory as Girls
		var selectCatogory = element(By.css('[aria-label="girls "]'));
		browser.wait(EC.elementToBeClickable(selectCatogory), 10000).then(function(){
   			selectCatogory.click();		
		}).then(function(){
			console.log("Correctly applied Girl's filter from Caterhories.");
		});

		//Select Size Range as Regular
		var selectSize = element(By.css('[aria-label="regular "]'));
		browser.wait(EC.elementToBeClickable(selectSize), 10000).then(function(){
   			selectSize.click();		
		}).then(function(){
			console.log("Correctly applied regular filter from size range.");
		});

	});

});