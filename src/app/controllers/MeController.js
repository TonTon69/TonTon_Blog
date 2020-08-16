const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
    // [GET] /me/stored/news
    storedNews(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-news', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}
module.exports = new MeController();