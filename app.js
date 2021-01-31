var http = require('http');
var express = require('express');
var mysql = require('mysql');
var session = require('express-session');
let cookieParser = require('cookie-parser');


// Połączenie z bazą
const db = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b0f6e52758643f',
    password: 'a0c740bc',
    database: 'heroku_683b595d91ac4c4'
});

// Łączenie
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

// Tymczasowe
app.get('/insert_temp', (req, res) => {
    let sql = 'INSERT INTO urzytkownicy (Login,Haslo,Imie,Nazwisko,Miasto,Adres,Email,Nr_telefonu) VALUES (\'login\',\'haslo\',\'Wojtek\',\'Ganobis\',\'Wroclaw\',\'Kamienna 13\',\'ganobis@gmail.com\',\'123456789\');'
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Dodano pomyslnie');
    });
});

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
    cookie: { maxAge: 2 * 60 * 60 * 1000}
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
})

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(express.static("./static"));
// app.use((req, res) => {
//     res.render('index', { username: 'foo' });
// });

app.use('/', indexRouter);

http.createServer(app).listen(process.env.PORT || 3000);