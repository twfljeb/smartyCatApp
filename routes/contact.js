var express = require('express');
var router = express.Router();

/* GET Services page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;