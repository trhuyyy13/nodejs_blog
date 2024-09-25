const express = require('express');
const morgan = require('morgan');
const path = require('path'); // Thêm module path
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', handlebars.engine()); // Sử dụng handlebars.engine()
app.set('view engine', 'handlebars');

// Đặt lại đường dẫn thư mục views nếu bạn muốn sử dụng "resources/views"
app.set('views', path.join(__dirname, 'resources/views')); 

// Kiểm tra xem đường dẫn tới thư mục views có đúng không
console.log(path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});


app.get('/news', (req, res) => {
  res.render('news');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
