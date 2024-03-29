const Course = require('../models/Courses');
const { mongooseToOject } = require('../../util/mongoose');
class CoursesController {
    // GET /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render('courses/show', {
                    courses: mongooseToOject(courses),
                });
            })
            .catch(next);
    }
    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // POST /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.vidid}/0.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
    // GET /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToOject(course),
                });
            })
            .catch(next);
    }
    // PUT /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored-courses'))
            .catch(next);
    }
}
module.exports = new CoursesController();
