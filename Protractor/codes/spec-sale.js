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

		//Select Sale Items
		var selectSale = element(By.css('[aria-label="sale "]'));
		browser.wait(EC.elementToBeClickable(selectSale), 10000).then(function(){
   			selectSale.click();		
		}).then(function(){
			console.log("Correctly located sale items.");
		});
		
		browser.sleep(3000);

	});

});