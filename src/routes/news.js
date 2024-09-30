const express = require('express');
const router = express.Router();

// Import đúng controller
const newsController = require('../app/controllers/NewsController');

// Sử dụng router.get() để định nghĩa route GET
router.get('/:slug', newsController.show);
router.get('/', newsController.index);
module.exports = router;
