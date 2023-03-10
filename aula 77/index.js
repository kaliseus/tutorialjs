let cpf = '033.001.679-22'
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
let validaCpf = function (cpf) {
    let penultimo;
    let numero1 = 0;
    let numero2 = 0;
    let validaCPF1 = (cpf) => {
        cpf.pop()
        penultimo = cpf.pop()
        let j = 10;
        for (let i of cpf) {
            numero1 = numero1 + (i * j)
            j--
        }
        numero1 = (11 -(numero1 % 11))
        if(numero1 > 9) {
            numero1 = 0
        }
        return numero1;
    }

    let validaCPF2 = (cpf) => {
        cpf.push(penultimo)
        let j = 11;
        for (let i of cpf) {
            numero2 = numero2 + (i * j)
            j--
        }
        numero2 = (11 - (numero2 % 11))
        if(numero2 > 9) {
            numero2 = 0
        }
        return numero2
    }
    validaCPF1(cpfArray);
    validaCPF2(cpfArray);

    cpfArray.push(String(numero2))
    let doisUltimosDigitos = [String(numero1),String(numero2)]
    if (JSON.stringify(doisUltimosDigitos) === JSON.stringify(cpfArray.slice(-2))) {
        return 'cpf válido'
    }
    else {
        return 'cpf inválido'
    }
}

console.log(validaCpf(cpfArray))