var express = require('express')
var bodyParser = require("body-parser");

var app = express();
var sqlite3 = require('sqlite3').verbose();

// persistant file database "myDB".
var db = new sqlite3.Database('myDB');

//now any files in public are routed
app.use(express.static('public_html'));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/inquiries', function (req, res, next) {

    
    //insert the form data into the table User
    var stmt = db.run(`INSERT INTO Customers VALUES ("${req.body.name}", "${req.body.email}", "${req.body.phone}","${req.body.satisfaction}", "${req.body.comments}")`);

    // still display the default web page in public folder, i.e. index.html, for next data entering 
    res.status(200).redirect('/contactUs.html');
});

// REST endpoint for getting all user data
app.get('/inquiries', function (req, res) {
    
    // Display a web page table
    res.write('<html><body>');
    res.write("<h3> The User Information Table </h3>");
    res.write("<table><tr style='background-color:#006633'>");
    res.write('<th width="150" style="color:#ffff99">Name</th>');
    res.write('<th width="150" style="color:#ffff99">Email</th>');
    res.write('<th width="150" style="color:#ffff99">Phone</th>');
    res.write('<th width="150" style="color:#ffff99">Rating</th>');
    res.write('<th width="350" style="color:#ffff99">Comments</th><tr>');

    // Retrieve data from table User on the server 
    // and display it in a web page table structure
    db.all('SELECT * FROM Customers', function(err, rows){
        rows.forEach(function (row){
            res.write('<tr style="background-color:#ccffcc">');
            res.write('<td width="150" align="center">'+row.name+'</td>');
            res.write('<td width="150" align="center">'+row.email+'</td>');
            res.write('<td width="150" align="center">'+row.phone+'</td>');
            res.write('<td width="150" align="center">'+row.rating+'</td>');
            res.write('<td width="350" align="center">'+row.comment+'</td></tr>');
        });
        res.write('</table>');
        res.write('</body></html>');
        res.send();
    });
});

app.listen(3000, function (){
    console.log("Web server running at: http://localhost:3000");
    console.log("Press Ctrl+C to shut down the web server");
});