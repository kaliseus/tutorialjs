exports.paginaInicial = (req, res) => {
    console.log(req.flash('error'), req.flash('info'), req.flash('sucess'))
    res.render('index');
    return
}

exports.trataPost = (req, res, next) => {
    res.send('sou sua rota de post')
    return
}