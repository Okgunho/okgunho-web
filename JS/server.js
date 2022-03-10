const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/about', function (req, res) {
    res.render('about.html')
})

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'example.org',
    user: 'bob',
    password: 'secret',
    dataase: 'my_db'
});

app.get('/db', function (req, res) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM Test', function (error, result, fields) {
            res.send(JSON.stringify(result));
            console.log('results', result);

            connection.release();

            if (error) throw error;
        });
    });
})