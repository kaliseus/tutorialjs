const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(8000, () => {
    console.log('executando em http://localhost:8000')
});