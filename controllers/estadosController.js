var router = require('express').Router();
var Estado = require('../models/states');

router.get('/', (req, res) => {
    Estado.getEstados((err, estados) => {
        if(err){
            throw err;
        }
        res.json(estados);
    })
});


module.exports = router;