const courseData = require('./courseData.js');
const dataScript = require('./dataScript.js');

async function course(req, res) {
    let course = await courseData(req.params.course)

    res.render('list', {
        pageTitle: 'Enquête ' + req.params.course,
        course: req.params.course,
        data: course,
        id: req.params.id
        
    })
}


async function review(req,res) {
    let course = await courseData(req.params.course);
    let userData = await dataScript.getDoneEnq(req.params.id, req.params.course);
    console.log(userData)

    res.render('done', {
        pageTitle: 'Enquête ' + req.params.course,
        course: req.params.course,
        data: course,
        userData: userData,
        id: req.params.id
    })
}


function loginPost(req, res) {
    dataScript.pushUserData(req.body);

    res.redirect('/' + req.body.user_studentnr + '/overview');
}

function enqPost(req, res) {
    dataScript.pushEnq(req.body, req.params.id, req.params.course);

    res.redirect('/' + req.params.id +'/overview');
}

function login(req, res) {
    res.render('home', {
        pageTitle: 'Enquête login'
    })
}

async function home(req, res) {
    let user = req.params.id;
    const userData = await dataScript.getUserData(user)
    const make = await dataScript.getEnq(user)
    const done = await dataScript.doneEnq(user)

    res.render('overview', {
        pageTitle: 'Mijn enquêtes',
        name: userData.user_name + ' ' + userData.user_surname,
        make: make,
        done: done,
    })
}

module.exports = {
    course,
    loginPost,
    enqPost,
    login,
    review,
    home
}