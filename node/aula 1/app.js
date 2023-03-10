const path = require('path');
// const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(Response => console.log(Response.data))
//     .catch(e => console.log(e));

const p1 = new Pessoa('Jão')
console.log(mod1)
console.log(p1)