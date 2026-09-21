// Elementos input do formulário
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTelefone = document.querySelector('#telefone');

// Botão de salvar do formulário
const btnSalvar = document.querySelector('#btnSalvar');

// Adiciona um evento de clique ao botão de salvar
btnSalvar.addEventListener('click', (e) => {
    e.preventDefault(); // evita que o formulário seja enviado por padrão.
    console.log(inputNome.value);
    console.log(inputEmail.value);
    console.log(inputTelefone.value);
});
