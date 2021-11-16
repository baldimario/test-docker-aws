// Express server listening on port 3000
// that serves a single route: /
// that return a json object with the text 'Hello World'
var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.json({
        "message": "Hello World"
    });
    }
);


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}
);
