// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');
const cors = require('cors')

const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    _db = database.db("presensi-km-itb")
    require('./app/routes')(app, _db);

    app.listen(port, () => {
        console.log('We are on port ' + port);
    });
})
