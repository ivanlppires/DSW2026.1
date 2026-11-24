const form = document.querySelector('#login-form');
const loginButton = document.querySelector('#login-button');
const clientList = document.querySelector('#client-list');
const clientButton = document.querySelector('#client-button');
let token = '';
clientButton.addEventListener('click', async () => {
    if (!token) {
        alert('Você precisa fazer login primeiro');
        return;
    }
    const result = await fetch('http://localhost:3000/clientes', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (result.status === 403) {
        alert('Acesso negado');
        return;
    }
    const data = await result.json();
    clientList.innerHTML = data.clientes;
})

loginButton.addEventListener('click', async (event) => {
    event.preventDefault(); // Evita o envio do formulário
    const result = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: form.user.value,
            pass: form.pass.value
        })
    });
     if (result.status === 403) {
        alert('Acesso negado');
        return;
    }
    const data = await result.json();
    console.log(data);
    token = data.token;
});