import GeraCPF from './mudules/GeraCPF'

(function () {
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.resultado');
    cpfGerado.innerText = gera.geraNovoCpf();

})();