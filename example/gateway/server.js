const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');


const mongoConection = require('../common/config/db')

const app = express();

const jsonParser = bodyParser.json();
const urlencodedParse = bodyParser.urlencoded({extended:false});

mongoConection
app.use(jsonParser);
app.use(urlencodedParse);

app.use(router.userRoute);
module.exports = app;