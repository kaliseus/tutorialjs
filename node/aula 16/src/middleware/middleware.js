exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariaverLocal = 'Este é o valor da variável local.'
    next();
};