
const nome = 'teste teste';


document.body.innerHTML += `seu nome é: ${nome} <br />`;
document.body.innerHTML += `Seu nome tem as letras: ${nome.length} <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `Qual o primeiro índice  da letra e no seu nome? ${nome.indexOf('e')} <br />`;
document.body.innerHTML += `Qual o ultimo índice da letra t no seu nome? ${nome.lastIndexOf('t')} <br />`;
document.body.innerHTML += `As ultima 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As Palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `seu nome em letra maiúscula é: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `seu nome em letra minúscula é: ${nome.toLowerCase()} <br />`;