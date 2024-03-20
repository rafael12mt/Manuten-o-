// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, username, senha, codigoConta) {
    const usuarios = getUsuarios();
    // Verificar se o usuário já está cadastrado
    if (usuarios.find(usuario => usuario.username === username)) {
        return 'Nome de usuário já cadastrado.';
    }

    // Gerar um ID único para o usuário
    const userId = generateUserId();

    // Adicionar novo usuário ao array de usuários
    usuarios.push({
        userId: userId,
        nome: nome,
        username: username,
        senha: senha,
        codigoConta: codigoConta
    });

    // Atualizar dados no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return 'Usuário cadastrado com sucesso.';
}

// Função para autenticar um usuário
function autenticarUsuario(username, senha) {
    const usuarios = getUsuarios();
    // Verificar se o usuário está cadastrado e a senha está correta
    const usuario = usuarios.find(user => user.username === username && user.senha === senha);
    return usuario ? usuario : null;
}

// Função auxiliar para obter a lista de usuários do localStorage
function getUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

// Função para gerar um ID único para o usuário
function generateUserId() {
    return 'user_' + Date.now(); // Usando timestamp como ID
}