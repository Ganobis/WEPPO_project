let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        title: 'Port-Able'
    })

});

module.exports = router;