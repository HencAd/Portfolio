require('dotenv').config({path:'.env'});
const express = require('express');
const app = express();
const routes =require('./routes/index');
const errorsHandler = require('./middlewares/errors');

app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.use('/',routes);


app.use(errorsHandler.notFound);
app.use(errorsHandler.catchErrors);

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`My port: ${port}`));