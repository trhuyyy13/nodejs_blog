const Course = require('../models/Course'); // Import model Course từ file models/Course.js
const { mongooseToObject } = require('../../util/mongoose'); // Import helper từ util

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                if (!course) {
                    return res.status(404).send('Course not found');
                }
                res.render('courses/show', {course: mongooseToObject(course)}); // Chỉ gửi một phản hồi duy nhất
            })
            .catch(next); // Chuyển lỗi đến middleware xử lý lỗi
    }

      // [GET] /courses/create
     create(req, res, next) {
        res.send("COURSE");
    }
 
}

module.exports = new CourseController(); // Export đối tượng của CourseController
