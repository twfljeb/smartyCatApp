var express = require('express');
var router = express.Router();

/* GET apps page. */
router.get('/apps', function(req, res, next) {
  res.render('apps', { title: 'Apps' });
});

module.exports = router;