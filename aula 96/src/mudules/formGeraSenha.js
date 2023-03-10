import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.resultado');
const qtd = document.querySelector('.qtd');
const checkMinusculas = document.querySelector('.chk-minusculas');
const checkMaiusculas = document.querySelector('.chk-maiusculas');
const checkNumeros = document.querySelector('.chk-numeros');
const checkSimbolos = document.querySelector('.chk-simbolos');

const gerarSenha = document.querySelector('.gerar-senha');

export default function () {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
}

function gera() {
    const senha = geraSenha(qtd.value,
        checkMaiusculas.checked,
        checkMinusculas.checked,
        checkNumeros.checked,
        checkSimbolos.checked
    );
    return senha || 'Nada Selecionado';
}