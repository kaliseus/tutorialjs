function retoranFuncao (nome) {
    return function () {
        return nome;
    }
}


const funcao = retoranFuncao('Luiz');
const funcao2 = retoranFuncao('João');

console.dir(funcao)
console.dir(funcao2)

console.log(funcao())
console.log(funcao2())