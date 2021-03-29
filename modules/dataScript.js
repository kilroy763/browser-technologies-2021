const fs = require('fs');
let path = "./public/info.json";
let data = JSON.parse(fs.readFileSync(path, "utf8"));

function pushUserData(user) {
    if (!data[user.user_studentnr]) {

        data[user.user_studentnr] = {
            user_name: user.user_name,
            user_surname: user.user_surname,
            user_studentnr: user.user_studentnr,
            enq: []
        }

        fs.writeFile(path, JSON.stringify(data), (err) => {
            if (err) console.error(err)
        });
    }
}

function pushEnq(enq, user, course) {
    let key = course

    data[user].enq.push({
        [key]: {
            lecturer: enq.lecturer,
            material: enq.material,
            period: enq.period,
            grade: enq.grade,
            content: enq.content,
            learning: enq.learning,
            comments: enq.comments
        }
    })

    fs.writeFile(path, JSON.stringify(data), (err) => {
        if (err) console.error(err)
    });
}

function getDoneEnq(user, course) {
    let array = data[user].enq;
    let userData;
    array.forEach(item => {
        let key = Object.keys(item)[0];
        if (key === course) {
            userData = item[key];
        }
    })
    return userData;
}

function getUserData(user) {
    let userData = data[user];

    return userData;
}

function getEnq(user) {
    let courses = ["Progressive Web App", "Browser Technologies", "Web App From Scratch", "CSS To The Rescue", "Real Time Web", "Human Centred Design", "Meesterproef"]
    // console.log(data[user].enq)
    let userData = data[user].enq
    let doneEnq = [];

    for (let i = 0; i < userData.length; i++) {
        let [name] = Object.keys(userData[i]);
        doneEnq.push(name)
    }

    for (let i = 0; i < courses.length; i++) {
        for (let j = 0; j < doneEnq.length; j++) {
            if (courses[i] === doneEnq[j]) {
                courses.splice(i, 1);
            }
        }
    }

    return courses;
}

function doneEnq(user) {
    let userData = data[user].enq
    let doneEnq = [];

    for (let i = 0; i < userData.length; i++) {
        let [name] = Object.keys(userData[i]);
        doneEnq.push(name)
    }

    return doneEnq;
}

module.exports = {
    pushUserData,
    pushEnq,
    getUserData,
    getDoneEnq,
    getEnq,
    doneEnq
}