const courseData = require('./courseData.js');
const dataScript = require('./dataScript.js');

async function enquete(req, res) {
    let course = await courseData(req.params.courses)

    res.render('enquete', {
        pageTitle: 'Enquête' + req.params.courses,
        course: req.params.courses,
        data: course
    })
}

function home(req, res) {
    res.render('home', {
        pageTitle: 'Enquête login'
    })
}

async function overview(req, res) {
    let user = req.body
    const userData = await dataScript.getUser(user)
    const make = await dataScript.getEnq(user)
    const done = await dataScript.doneEnq(user)

    res.render('overview', {
        pageTitle: 'Mijn enquêtes',
        name: userData.user_name + ' ' + userData.user_surname,
        make: make,
        done: done
    })
}

module.exports = {
    enquete,
    overview,
    home
}