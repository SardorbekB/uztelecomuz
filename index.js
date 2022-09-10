const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('forInduviduals.ejs', {
      title: "Uztelecom - National operator",
      title1: "Узтелеком - национальный оператор",
      title2: "Uztelekom - milliy operator"
  });
});

const start = async () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views/pages');
  
    app.use(express.static(__dirname + '/public'));

    app.use('/en', require('./server/routes/forInduviduals'));
    app.use('/en/forBusiness', require('./server/routes/forBusiness'));
    app.use('/en/forOperators', require('./server/routes/forOperators'));
    app.use('/en/aboutCompany', require('./server/routes/aboutCompany'));
  
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server ${process.env.PORT | 3000} - portda ishlayapdi`);
    });
};
  
  start();