const express = require('express');
const bodyParser = require('body-parser')
const apiV1 = require('./routes/v1');


const app = express();
const PORT = 8080;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

apiV1(app);



app.set('views', './views');
app.set('view engine', 'ejs');




app.get((req, res) => {
    res.status(404).send('not found')
})


app.listen(PORT, ()=> {
    console.log(`server on port: ${PORT}`);
})


