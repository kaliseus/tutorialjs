const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato');
}

exports.register = async (req, res) => {

    try {
        const contato = new Contato(req.body);
        await contato.register();

        if(contato.errors.length > 0 ){
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucess', 'Contato registrado com sucesso');
        return  req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    }catch (e) {
        console.log(e)
        return res.render('404')
    }
}

exports.editIndex = async function (req, res) {
    if(!req.params.id) return res.render('404');

    const contato = await Contato.buscaPorID(req.params.id);
    if(!contato) return res.render('404');
    res.render('contato', { contato });
};