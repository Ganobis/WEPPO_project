var http = require('http');
var express = require('express');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');


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

let indexRouter = require('./routes/index');

var app = express();

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

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static("./static"));
// app.use((req, res) => {
//     res.render('index', { username: 'foo' });
// });

app.use('/', indexRouter);

http.createServer(app).listen(process.env.PORT || 3000);