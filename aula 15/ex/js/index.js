let numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
let texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = "";
texto.innerHTML += `<p> a raiz quadrada desse número é: ${numero ** (1/2)} <p/>`;
texto.innerHTML += `<p> oque você digitou é realmente um número: ${!isNaN(numero)} <p/>`;
texto.innerHTML += `<p> ${numero} é um inteiro? ${Number.isInteger(numero)} <p/>`;
texto.innerHTML += `<p> ${numero} é um decimal? ${!Number.isInteger(numero)} <p/>`;
texto.innerHTML += `<p> arredondado para baixo é: ${Math.floor(numero)} <p/>`;
texto.innerHTML += `<p> arredondado para cima é: ${Math.ceil(numero)} <p/>`;
texto.innerHTML += `<p> com duas casas decimais: ${numero.toFixed(2)} <p/>`;