// Require third-party modules
const express = require('express');
var path = require('path')


// Config object
const port = 8000;

// Create new express app in 'app'
const app = express();

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', function(req, res) {
	// Send a plain string using res.send();
	res.render('home', {
		pageTitle: `Node.js, Express & PWA`,
		tagline: 'Basic implementation'
	})
});

app.get('/overview', function(req, res) {
    res.render('overview', {

    })
});

// Actually set up the server
app.listen(process.env.PORT || port, function() {
    console.log(`Application started on port: ${port}`);
    console.log(`Application is visible on: http://localhost:${port}`);
});

