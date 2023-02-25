const express = require('express')
const app = express()
const port = 3000

const path = require('path');
const pug = require("pug");

app.use(express.urlencoded());
app.use('/static', express.static('static'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('page');
})

app.post("/form", function (req, res) {
    console.log(`Mensaje de ${req.body.name}: ${req.body.message}`)
    res.render('page', { msg: `¡Gracias ${req.body.name}!` });
})

app.listen(port, () => {
  console.log(`APP listening on port ${port}`)
})