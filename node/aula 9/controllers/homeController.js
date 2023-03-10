exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Ola mundo</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('sou sua rota de post')
}