require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch( e => console.log(e))

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middleware/middleware')

const sessionOptions = session({
    secret: 'naiocioawo0inc20nwec020cm0',
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(middlewareGlobal)
app.use(sessionOptions);
app.use(flash());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views')); //caminha absoluto com path do node
app.set('view engine', 'ejs');

app.use(routes);

app.on('pronto', () => {
    app.listen(8000, () => {
        console.log('executando em http://localhost:8000')
        console.log('Servidor Executando na porta 8000')
    });
})
