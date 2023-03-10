(function (idade, peso, altura) {
    const sobreNome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobreNome
    }

    function falaNome () {
        console.log(criaNome('Luiz', 'Ricardo'));
    }

    falaNome();

    console.log(idade, peso, altura);
}(30,40,1));

const nome = 'qualquer coisa';