const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.render('aboutCompany.ejs', {
        title: "About company | Uztelecom.uz"
    });
});

module.exports = router;