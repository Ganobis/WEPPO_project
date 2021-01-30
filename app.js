var http = require('http');
var express = require('express');

let indexRouter = require('./routes/index');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static("./static"));
// app.use((req, res) => {
//     res.render('index', { username: 'foo' });
// });

app.use('/', indexRouter);

http.createServer(app).listen(process.env.PORT || 3000);