var router = require('express').Router();

router.get('/', function (req, res) {
    res.json({distrito : 'Sao Paulo'});
})

module.exports = router;