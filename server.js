let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/hello', function (req, res) {
    res.send('{"message": "Hello World!"}');
});

app.get('/test', function (req, res) {
    console.log(req.query);

    let result = '<h1>Parameters: name and value</h1>\n';
    result += '<ul>\n'
    for(let item in req.query) {
        result += `<li>${item}: ${req.query[item]}</li>\n`;
    }
    result += '</ul>\n'

    res.send(result);
});


let port = process.env.PORT || 8080;
let ip = process.env.IP || 'localhost';

app.listen(port, ip, function () {
    console.log(`Listening on ${ip}:${port}`);
});
