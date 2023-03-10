const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('src/middleware/Middleware')

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views')); //caminha absoluto com path do node
// app.set('views', './src/views') // caminho relativo
app.set('view engine', 'ejs');

app.use(routes);

app.listen(8000, () => {
    console.log('executando em http://localhost:8000')
    console.log('Servidor Executando na porta 8000')
});