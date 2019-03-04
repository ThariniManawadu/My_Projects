var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('myDB');      //file database

db.serialize(function() {
        
    db.run("CREATE TABLE IF NOT EXISTS Customers (name TEXT, email TEXT, phone TEXT, rating TEXT, comment TEXT)");
        
    db.each("SELECT * FROM Customers", function(err, row) {
        console.log("Name: " + row.name + "  Email: " + row.email + "  Phone: " + row.phone  + "  Rating: " + row.rating  + "  Comments: " + row.comment ); 
    });
});

db.close();