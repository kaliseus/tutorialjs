function rand (min = 0 ,max = 3) {
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

// esperaAI('Fase 1', rand())
//     .then(valor => {
//     console.log(valor);
//     return esperaAI('Fase 2', rand());
// }).then(valor => {
//     console.log(valor)
//     return esperaAI('Fase 3', rand());
// }).then(valor => {
//     console.log(valor)
//     return valor;
// }).then(valor => console.log('Terminamos na', valor))
//     .catch(e => console.log(e));

async function executa() {
    try{
        const fase1 = await esperaAI('Fase 1', 1000);
        console.log(fase1);

        setTimeout(function () {
            console.log('esta promise estava pendente', fase1)
        },1100);
        const fase2 = await esperaAI('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAI('Fase 3', rand());
        console.log(fase3);
        console.log('terminadmos na fase 3', fase3);
    }
    catch (e) {
        console.log(e);
    }

}
// executa();

// pensing -> pendete
// fullfilled -> resolvida
// rejected -> rejeitada

const teste2 = esperaAI('aiai', 5000);
console.log(teste2)
