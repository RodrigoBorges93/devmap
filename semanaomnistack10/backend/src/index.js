const routes = require('./routes');
const express = require('express');
const mongoose = require('mongoose');
const user = require('../secrets/configs');
const password = require('../secrets/configs');

const app = express();

mongoose.connect(`mongodb+srv://rodrigo:fiveow123@cluster0-4znbu.mongodb.net/week10?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);


app.listen(3333);