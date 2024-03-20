// Função para limpar os campos de um formulário
function limparFormulario(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
    } else {
        console.error('Formulário não encontrado.');
    }
}

// Função para exibir uma mensagem de erro
function exibirMensagemErro(mensagem) {
    const mensagemErro = document.getElementById('mensagem-erro');
    if (mensagemErro) {
        mensagemErro.textContent = mensagem;
        mensagemErro.style.display = 'block';
    } else {
        console.error('Elemento de mensagem de erro não encontrado.');
    }
}

// Função para ocultar a mensagem de erro
function ocultarMensagemErro() {
    const mensagemErro = document.getElementById('mensagem-erro');
    if (mensagemErro) {
        mensagemErro.textContent = '';
        mensagemErro.style.display = 'none';
    } else {
        console.error('Elemento de mensagem de erro não encontrado.');
    }
}

// Função para preencher um elemento HTML com dados de um usuário
function preencherDadosUsuario(usuario) {
    const usuarioElement = document.getElementById('dados-usuario');
    if (usuarioElement) {
        usuarioElement.innerHTML = `
            <h2>Dados do Usuário</h2>
            <p><strong>Nome:</strong> ${usuario.nome}</p>
            <p><strong>Nome de Usuário:</strong> ${usuario.username}</p>
            <p><strong>Código de Conta:</strong> ${usuario.codigoConta}</p>
        `;
    } else {
        console.error('Elemento de dados do usuário não encontrado.');
    }
}

// Exemplo de uso:
const usuarioExemplo = {
    nome: 'João Silva',
    username: 'joao123',
    codigoConta: '123456'
};
preencherDadosUsuario(usuarioExemplo);