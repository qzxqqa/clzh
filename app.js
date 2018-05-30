let express = require('express');
let path = require('path');
let router = require('./routes/router');

let app = express();

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
    console.log('Service is listening.');
});

router(app);