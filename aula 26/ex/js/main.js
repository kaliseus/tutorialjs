const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Invalido', false);
        return;
    }

    if (!altura) {
        setResultado('altura Invalida', false)
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true);
});

function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc <= 18.5) {
        return nivel[0]
    }
    if (imc >= 18.5 || imc <= 24.9) {
        return nivel[1]
    }
    if (imc >= 25 || imc <= 29.9) {
        return nivel[2]
    }
    if (imc >= 30 || imc <= 34.9) {
        return nivel[3]
    }
    if (imc >= 35 || imc <= 39.9) {
        return nivel[4]
    } else {
        return nivel[5]
    }
}

function getIMC(peso, altura) {
    const imc = (peso / (altura ** 2));
    return imc.toFixed(2);
}


function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if(isValid)
    {
        p.classList.add('resultado')
    }else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}