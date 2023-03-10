function rand (min,max) {
    max *=1000;
    min *=1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAI(msg,tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('cai no erro');
                return;
            }
            resolve(msg.toUpperCase() + ' - passei na promise');
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache')
    } else  {
        return esperaAI('baixado',3000);
    }
}


baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('erro', e))
