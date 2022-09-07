const express = require('express');
const app = express();

const start = async () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views/pages');
  
    app.use(express.static(__dirname + '/public'));
  
    app.use('/', require('./server/routes/forInduviduals'));
    app.use('/forBusiness', require('./server/routes/forBusiness'));
    app.use('/forOperators', require('./server/routes/forOperators'));
    app.use('/aboutCompany', require('./server/routes/aboutCompany'));
  
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server ${process.env.PORT | 3000} - portda ishlayapdi`);
    });
};
  
  start();