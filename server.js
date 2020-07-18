let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/hello', function (req, res) {
    res.send('{"message": "Hello World!"}');
});

let port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
let ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || 'localhost';

app.listen(port, ip, function () {
    console.log(`Listening on ${ip}:${port}`);
});
