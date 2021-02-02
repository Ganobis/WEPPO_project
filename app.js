var http = require('http');
let createError = require('http-errors');
var express = require('express');
let path = require('path');
var session = require('express-session');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let loginRouter = require('./routes/login');
let registerRouter = require('./routes/register');
let productsRouter = require('./routes/products');
let cartRouter = require('./routes/cart');
let ordersRouter = require('./routes/orders');

var app = express();

app.locals.moment = require('moment');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// session
app.use(session({
    secret: '654af64asd46w3',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2 * 60 * 60 * 1000 }
}))

app.use(cookieParser('dhfshserharhestjersefgtafh'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/product', productsRouter);
app.use('/cart', cartRouter);
app.use('/orders', ordersRouter);


app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
});

app.use(express.static("./static"));

app.use('/', indexRouter);

app.use(function(req, res, next) {
    res.status(404).render('404');
});


http.createServer(app).listen(process.env.PORT || 3000);