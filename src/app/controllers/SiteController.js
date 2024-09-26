class SiteController {
    //[GET] /
    index(req, res) {
        res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

// Tạo ra một đối tượng và xuất ra ngoài
module.exports = new SiteController(); 
