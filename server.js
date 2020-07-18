let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/hello', function (req, res) {
    res.send('{"message": "Hello World!"}');
});

app.listen(function () {
    console.log('Nesp is listening');
});
