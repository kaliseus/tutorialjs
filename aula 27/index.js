const postuacaoUsuario = 999;

const nivelUsuario = postuacaoUsuario >= 1000 ? 'Usuário VIP' : "usuário normal";

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario, corPadrao);