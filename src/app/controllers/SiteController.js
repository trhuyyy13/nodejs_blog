const Course = require('../models/Course'); // Import model Course từ file models/Course.js

class SiteController {
    //[GET] /
    async index(req, res) {
        try {
            const courses = await Course.find();  // Sử dụng await để chờ kết quả
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'ERROR' });  // Xử lý lỗi nếu có
        }
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

// Tạo ra một đối tượng và xuất ra ngoài
module.exports = new SiteController();
