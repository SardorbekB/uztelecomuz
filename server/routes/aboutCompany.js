const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.render('aboutCompany.ejs');
});

module.exports = router;