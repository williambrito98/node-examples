const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

//GET, POST, PUT, DELETE

mongoose.connect('mongodb://william:william1998@william-omnistack-9-shard-00-00-6gsfa.mongodb.net:27017,william-omnistack-9-shard-00-01-6gsfa.mongodb.net:27017,william-omnistack-9-shard-00-02-6gsfa.mongodb.net:27017/test?ssl=true&replicaSet=william-omnistack-9-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//req.query = acessar query params(para filtros)
//req.params = acessar route params (para edição, delete)
//req.body = acessar corpo da rquisição (para criação , edição)

app.use(express.json());
app.use(routes);


app.listen(3333);