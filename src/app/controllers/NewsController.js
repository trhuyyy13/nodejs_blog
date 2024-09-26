class NewsController {
    //[GET] /
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL');
    }
}

// Tạo ra một đối tượng và xuất ra ngoài
module.exports = new NewsController(); 
