let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        title: 'Port-Able'
    })

});

router.get( '/login', (req, res) => {
    res.render('login');
   });
   
router.post('/login', (req, res) => {
    var username = req.body.login;
    var pwd = req.body.password;

    if (username == pwd) {
        // wydanie ciastka
        res.cookie('user', username, { signed: true });
        // przekierowanie
        var returnUrl = req.query.returnUrl;
        res.redirect(returnUrl);
    } else {
        res.render('login', { message: "Zła nazwa logowania lub hasło" }
        );
    }
});


router.get('/register', (req, res) => {
    res.render('/register')
});


module.exports = router;