const alunos = [
    { id: 1, nome: 'Adonias Silva', email: 'ado@unemat.br' },
    { id: 2, nome: 'Maria Souza', email: 'maria@unemat.br' },
    { id: 3, nome: 'Maria Ana', email: 'mariana@unemat.br' }
];

export const listaAlunos = (req, res) => {
    const { nome, ordem } = req.query;
    let result = alunos;
    if (nome){
        result = result.filter(a => a.nome.toLowerCase().includes(nome.toLowerCase()));
    }
    console.log('buscando por nome: ', result);

    if (ordem === 'asc')
        result = result.sort((a, b) => a.nome.localeCompare(b.nome));
    else if (ordem === 'desc')
        result = result.sort((a, b) => b.nome.localeCompare(a.nome));

    console.log('buscando por ordem: ', result);

    res.status(200).json(result);
}

export const buscaAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const aluno = alunos.find(a => a.id === id);
    if (aluno)
        res.status(200).json(aluno);
    else
        res.status(404).json({ message: 'Aluno não encontrado' });
}
const buscaAlunoPorNome = (req, res) => {
    console.log('buscando por nome: ', nome);

    const nome = req.query.nome;

    const alunosEncontrados = alunos.filter(a => a.nome.toLowerCase().includes(nome.toLowerCase()));
    if (alunosEncontrados.length > 0)
        res.status(200).json(alunosEncontrados);
    else
        res.status(404).json({ message: 'Nenhum aluno encontrado com esse nome' });
}

export const criaAluno = (req, res) => {
    const { nome, email } = req.body;
    const novoAluno = {
        id: Date.now(),
        nome,
        email
    };
    alunos.push(novoAluno);
    res.status(201).json("Aluno criado com sucesso");
};

export const atualizaAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const alunoIndex = alunos.findIndex(a => a.id === id);
    if (alunoIndex !== -1) {
        alunos[alunoIndex] = { ...alunos[alunoIndex], ...req.body };
        res.status(200).json("Aluno atualizado com sucesso");
    } else {
        res.status(404).json({ message: 'Aluno não encontrado' });
    }
}

export const removeAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const alunoIndex = alunos.findIndex(a => a.id === id);
    if (alunoIndex !== -1) {
        alunos.splice(alunoIndex, 1);
        res.status(200).json("Aluno removido com sucesso");
    } else {
        res.status(404).json({ message: 'Aluno não encontrado' });
    }
}
