export const nome = 'Luiz';
export const sobreNome = 'Miranda';
export const idade = 30;
export function soma(x,y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }
}

// export { nome, sobreNome, idade, soma};