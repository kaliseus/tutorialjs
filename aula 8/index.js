const nome = 'Luiz';
const sobreNome = "Otávio";
let idade = 30;
const peso = 84;
const altura = 1.80;
const nascimento =  2023 - idade;

let imc = (peso / (altura * 2));

console.log(nome, sobreNome, 'tem', peso, 'KG', idade, 'anos,', 'nasceu em', nascimento, 'e possui o imc de:', imc.toFixed(2));

console.log(`${nome} ${sobreNome} tem ${peso} KG ${idade} anos nasceu em ${nascimento} e possui o imc de: ${imc.toFixed(2)}.`);