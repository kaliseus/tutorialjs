const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

//http://facebook.com/profile/1234 final é o parametro da url
//http://facebook.com/profile/1234?campanha=googleads&nome_campanha=seila     //query strings


app.get('/',(req, res) => {
    res.send(`
<form action="/" method="POST">
Nome: <input type="text" name="nome">
<button>Ola mundo</button>
</form>
`);
})

app.get('/teste/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi ${req.body.nome}`)
})

app.listen(8000, () => {
    console.log('executando em http://localhost:8000')
});