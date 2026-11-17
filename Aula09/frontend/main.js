const listarAlunos = async () => {
    const result = await fetch('http://localhost:3000/alunos', { method: 'GET' });
    const alunos = await result.json();
    montarListaAlunos(alunos);
}
const lista = document.querySelector('#studentList');
const montarListaAlunos = (alunos) => {
    lista.innerHTML = '';
    alunos.forEach(aluno => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>${aluno.nome} - ${aluno.email}</div>
            <div>
                    <button onclick="editarAluno(${aluno.id})">✏️</button>  
                <button onclick="removerAluno(${aluno.id})">🗑️</button>
            </div>`;
        lista.appendChild(li);
    });
}
listarAlunos();

const form = document.querySelector('#addForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nome = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const result = await fetch('http://localhost:3000/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email })
    });
    if(result.ok) {
        listarAlunos();
        form.reset();
    }
})