const alunos = [];

export const listaAlunos = (req, res) => {
    res.status(200).json(alunos);
}

export const buscaAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const aluno = alunos.find(a => a.id === id);
    if (aluno)
        res.status(200).json(aluno);
    else
        res.status(404).json({ message: 'Aluno não encontrado' });
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
}
