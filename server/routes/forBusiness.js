const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.render('forBusiness.ejs', {
        title: "Uztelecom - National operator"
    });
});

module.exports = router;