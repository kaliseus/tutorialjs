function rand (min,max) {
    max *=1000;
    min *=1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAI(msg,tempo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') reject(new Error('Erro'))
            resolve(msg);
        }, tempo);
    });
}

esperaAI('Frase 1', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAI('Frase 2', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAI(22222, rand(1,3));
    }).then(resposta => {
        console.log(resposta);
}).then(() => {
    console.log('sou o ultimo')
}).catch(e => {
    console.log('Erro:', e)
})
