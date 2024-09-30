const Course = require('../models/Course'); // Import model Course từ file models/Course.js
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mutipleMongooseToObject(courses) // Truyền courses vào hàm để chuyển đổi
                }); 
            })
            .catch(error => next(error)); // Gọi hàm next nếu có lỗi
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

// Tạo ra một đối tượng và xuất ra ngoài
module.exports = new SiteController();
