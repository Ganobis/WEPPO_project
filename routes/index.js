let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        title: 'Shop app'
    })

});

module.exports = router;