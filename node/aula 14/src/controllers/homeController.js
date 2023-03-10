exports.paginaInicial = (req, res) => {
    res.render('index');
    return
}

exports.trataPost = (req, res, next) => {
    res.send('sou sua rota de post')
    return
}