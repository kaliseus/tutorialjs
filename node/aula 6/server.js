const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send(`
<form action="/" method="POST">
Nome: <input type="text" name="nome">
<button>Enviar</button>
</form>
`);
})

app.get('/contato', (req, res) => {
    res.send('obrigado')
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.listen(8000, () => {
    console.log('executando em http://localhost:8000')
});