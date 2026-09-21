// Elementos input do formulário
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTelefone = document.querySelector('#telefone');

// Botão de salvar do formulário
const btnSalvar = document.querySelector('#btnSalvar');

// Adiciona um evento de clique ao botão de salvar
btnSalvar.addEventListener('click', (e) => {
    e.preventDefault(); // evita que o formulário seja enviado por padrão.
    const cliente = {
        id: Date.now(), // Gera um ID único baseado no timestamp atual
        nome: inputNome.value,
        email: inputEmail.value,
        telefone: inputTelefone.value
    }
    clientes.push(cliente); // Adiciona o cliente ao vetor de clientes
    document.querySelector('#formCliente').reset(); // Limpa o formulário após salvar
    console.log(clientes); // Exibe o vetor de clientes no console para verificação
});

// Vetor de clientes (objeto cliente: {id, nome, email, telefone})
const clientes = [];