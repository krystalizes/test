const Course = require('../models/Courses');
const {
    mongooseToOject,
    multipleMongooseToObject,
} = require('../../util/mongoose');
class MeController {
    // GET /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // POST /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.vidid}/0.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}
module.exports = new MeController();
