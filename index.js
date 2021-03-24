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

app.post('/login-redirect', render.loginPost)

app.post('/:id/enq-redirect/:course', render.enqPost)

app.get('/:id/overview', render.home)

app.get('/:id/enq/:enquete', render.course)

app.get('/', redirect)

app.get('/home', render.login)

app.get('*', error)

function redirect(req, res) {
    res.redirect('/home');
}

function error(req, res) {
    res.status(404).render('not-found', {
        pageTitle: '404 Not Found'
    })
}




// Actually set up the server
app.listen(process.env.PORT || port, function() {
    console.log(`Application started on port: ${port}`);
    console.log(`Application is visible on: http://localhost:${port}`);
});

