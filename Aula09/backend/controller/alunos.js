import db from './mysql.js';

export const listar = async (req, res) => {
    const [rows] = await db.query('SELECT * FROM alunos');
    res.json(rows);
}
export const criar = async (req, res) => {
    const { nome, email } = req.body;
    const [result] = await db.query(`INSERT INTO alunos (nome, email) VALUES ('${nome}', '${email}')`);
    res.json({ message: `Aluno criado com ID ${result.insertId}` });
}
export const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    await db.query(`UPDATE alunos SET nome = '${nome}', email = '${email}' WHERE id = ${id}`);
    res.json({ message: `Aluno com ID ${id} atualizado` });
}
export const deletar = async (req, res) => {
    const { id } = req.params;
    await db.query(`DELETE FROM alunos WHERE id = ${id}`);
    res.json({ message: `Aluno com ID ${id} deletado` });
}