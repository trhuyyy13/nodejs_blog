  const newsRouter = require('./news');
  const coursesRouter = require('./courses');
    const siteRouter = require('./site');
          function route(app) {
              // app.get('/news', (req, res) => {
              //     res.render('news');
              //   });
              app.use('/news', newsRouter);
              app.use('/', siteRouter);
              app.use('/course', coursesRouter);
          }

      module.exports = route;
