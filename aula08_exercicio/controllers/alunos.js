import db from '../db/mysql.js';

export const listaAlunos = async (req, res) => {
    const sql = 'SELECT * FROM alunos';
    try{
        const [ rows ] = await db.query(sql);
        res.status(200).json(rows);
    }catch (error) {
        res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
}
export const buscaAluno = async (req, res) => {
}
export const criaAluno = async (req, res) => {
    const { nome, email } = req.body;
    const sql = `INSERT INTO alunos (nome, email) VALUES ('${nome}', '${email}')`;
    try {
        const [ result ] = await db.query(sql);
        res.status(201).json({ id: result.insertId, nome, email });
    }catch (error) {
        res.status(500).json({ error: 'Erro ao criar aluno' });
    }
};
export const atualizaAluno = async (req, res) => {
}
export const removeAluno = async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM alunos WHERE id = ${id}`;
    try {
        const [ result ] = await db.query(sql);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Aluno não encontrado' });
        } else {
            res.status(200).json({ message: 'Aluno removido com sucesso' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover aluno' });
    }
}
