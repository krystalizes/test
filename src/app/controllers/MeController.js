const Course = require('../models/Courses');
const {
    mongooseToOject,
    multipleMongooseToObject,
} = require('../../util/mongoose');
class MeController {
    // GET /me/stored-courses
    storedCourses(req, res, next) {
        let coursesFindAll = Course.find({});
        if (req.query.hasOwnProperty('_sort')) {
            coursesFindAll = coursesFindAll.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([
            coursesFindAll,
            Course.countDocuments(),
            Course.countDocumentsWithDeleted(),
        ])
            .then(([courses, notDeletedCount, allCount]) => {
                const deletedCount = allCount - notDeletedCount;
                res.render('me/stored-courses', {
                    deletedCount: deletedCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // GET /me/trash-courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                const deletedCourses = courses.filter(
                    (course) => course.deleted,
                );
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(deletedCourses),
                });
            })
            .catch(next);
    }
}
module.exports = new MeController();
