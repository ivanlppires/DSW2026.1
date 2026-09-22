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
    atualizarTabela(); // Atualiza a tabela de clientesss
});

// Vetor de clientes (objeto cliente: {id, nome, email, telefone})
const clientes = [];

// Bucar o tbody da tabela de clientes
const tbodyClientes = document.querySelector('#tabelaClientes');

// Função para atualizar a tabela de clientes
const atualizarTabela = () => {
    tbodyClientes.innerHTML = ''; // Limpa o conteúdo atual do tbody
    clientes.forEach(cliente => {
        const tr = document.createElement('tr'); // Cria uma nova linha na tabela
        tr.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefone}</td>
            <td>
                <button class="btn btn-primary btn-sm me-1" onclick="editarCliente(${cliente.id})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="removerCliente(${cliente.id})">Remover</button>
            </td>
        `;
        tbodyClientes.appendChild(tr); // Adiciona a nova linha ao tbody
    });
}

const removerCliente = (id) => {

    // remover com o filter
    //const clientesFiltrados = clientes.filter(cliente => cliente.id !== id);

    // remover com o splice
    const index = clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) clientes.splice(index, 1);

    // atualizar a tabela
    atualizarTabela();
}