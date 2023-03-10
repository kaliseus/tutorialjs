// declaração de função (function hoisting, ela é elevada para o cabeçalho do arquivo antes de ser chamado)
falaOI();
function falaOI () {
    console.log('fala oi');
}
const souUmDado = function () {
    console.log('Sou um dado');
};
function executafuncao(funcao) {
    funcao();
}
console.log(executafuncao(souUmDado));
const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
};
funcaoArrow();

// Dentro de um objeto eu posso ter uma funçao

const obj = {
    falar () {
        console.log('estou falando');
    }
};

obj.falar();