// Função para validar o formulário de login
function validateLoginForm(username, password) {
    if (!username.trim() || !password.trim()) {
        return 'Por favor, preencha todos os campos.';
    }

    // Validação adicional pode ser adicionada aqui, se necessário

    return '';
}

// Função para validar o formulário de cadastro
function validateCadastroForm(fullname, username, password, accountCode) {
    if (!fullname.trim() || !username.trim() || !password.trim() || !accountCode.trim()) {
        return 'Por favor, preencha todos os campos.';
    }

    // Validar força da senha
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.trim())) {
        return 'A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.';
    }

    // Você pode adicionar mais validações conforme necessário

    return '';
}

// Exemplo de uso:
const loginFormValidationResult = validateLoginForm('username@example.com', 'Password123');
console.log(loginFormValidationResult); // Saída: ''

const cadastroFormValidationResult = validateCadastroForm('John Doe', 'username@example.com', 'Password123', '123456');
console.log(cadastroFormValidationResult); // Saída: ''