var router = require('express').Router();

router.get('/', function (req, res) {
    res.json({cidade : 'Sao Paulo'});
})


module.exports = router;