// for in le os indices os chaves do objeto


const pessoa = {
    nome: "Luiz",
    sobreNome: "Otávio",
    idade: 30
};


for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}