const form = document.querySelector('.form');

// selecionando por id no html
let peso = document.body.querySelector('#peso');

// selecionando por classe no html
let altura = document.body.querySelector('.altura');

const IMC = (peso.value / (altura.value * 2));
const resultadoIMC = function (IMC) {
    if (IMC <= 18.5) {
        return `Abaixo do peso`
    } else if (IMC >= 18.5 || IMC <= 24.9) {
        return `Peso normal`
    } else if (IMC >= 25 || IMC <= 29.9) {
        return `Sobrepeso`
    } else if (IMC >= 30 || IMC <= 34.9) {
        return `Obesidade grau 1`
    } else if (IMC >= 35 || IMC <=39.9) {
        return ` Obesidade grau 2`
    } else {
        return `Obesidade grau 3`
    }
}
function recebeEventoForm(evento) {
    evento.preventDefault();
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = `Seu IMC é: ${IMC} (${resultadoIMC(IMC.toFixed(2))})`;
}

form.addEventListener('submit', recebeEventoForm)
