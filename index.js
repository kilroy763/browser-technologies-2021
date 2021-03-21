const express = require('express');
var path = require('path')
var fs = require('fs')
const ejs = require('ejs')
const bodyParser = require('body-parser');
const render = require('./modules/render.js')


const port = 8000;

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');


app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true}))

app.use(bodyParser.json())

app.use(express.json())

app.post('/overview', render.overview)

app.get('/enq/:enquete', render.enquete)

app.get('/', redirect)

app.get('/home', render.home)

app.get('*', error)

function redirect(req, res) {
    res.redirect('/home');
}

function error(req, res) {
    res.status(404).render('not-found', {
        pageTitle: '404 Not Found'
    })
}

// app.get('/',  function(req, res) {

// 	res.render('home', {
// 		pageTitle: `Node.js, Express & PWA`,
//         tagline: 'Basic implementation'
// 	})
// });

// app.get('/enquete/wafs', function(req, res) {
//     // Send a plain string using res.send();
// 	res.render('enquete', {
// 		pageTitle: `Node.js, Express & PWA`,
//         tagline: 'Basic implementation'
// 	})
// });

// app.get('/overview', function(req, res) {
//     let newUser = {
//         user_name: user.user_name,
//         user_number: user.user_number,
//         enq: []
//     }
//     res.render('overview', {
//         pageTitle: `Node.js, Express & PWA`,
//         name: user.user_name,
//         number: user.user_number
//     })
// })

// app.post('/overview', function(req, res) {
//     console.log(req.body)
//     let user = req.body

//     if (data[user.user_number]) {
//         console.log('hi')
//     } else {
//         let newUser = {
//             user_name: user.user_name,
//             user_number: user.user_number,
//             enq: []
//         }
//         const noop = () => {}
//         let json = JSON.stringify(newUser)
//         fs.writeFileSync(test, json, "utf8", noop)
//     }
    
//     res.render('overview', {
//         title: 'Mijn enquêtes',
//         pageTitle: `Node.js, Express & PWA`,
//         name: user.user_name,
//         number: user.user_number
//     })
// });



// Actually set up the server
app.listen(process.env.PORT || port, function() {
    console.log(`Application started on port: ${port}`);
    console.log(`Application is visible on: http://localhost:${port}`);
});

