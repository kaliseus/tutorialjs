function meuEscopo() {
    const form = document.querySelector('.form');

    // pegar o evento de envio 'submit' e reter seu valor para não carregar a página
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado.')
    // };

    let pessoas = [];

    let resultado = document.querySelector('.resultado')

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobreNome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome : nome.value,
            sobreNome : sobreNome.value,
            peso : peso.value,
            altura : altura.value
        })
        console.log(pessoas);
        resultado.innerHTML += ` <p> ${nome.value}, ${sobreNome.value}` +
            ` ,${peso.value}, ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();