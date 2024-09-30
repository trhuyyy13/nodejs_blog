const express = require('express');
const router = express.Router();

// Import đúng controller
const courseController = require('../app/controllers/CourseController'); // Đổi tên biến cho thống nhất

// Sử dụng router.get() để định nghĩa route GET
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);

module.exports = router;
