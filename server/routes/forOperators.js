const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.render('forOperators.ejs', {
        title: 'title: "Uztelecom - National operator"'
    });
});

module.exports = router;