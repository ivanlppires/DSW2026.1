import db from '../db/mysql.js'

export const cadastrar = async (req, res) => {
    const sql = "INSERT INTO alunos (nome, email) VALUES ('ivan', 'ivan@unemat.br');";
    try {
        const result = await db.query(sql);
        res.status(201).json({ message: 'Aluno cadastrado com sucesso' });
    } catch (error) {
        console.error('Error occurred while inserting data:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }



}

export const listar = async (req, res) => {
    const sql = "SELECT * FROM alunos;";
    try {
        const [rows] = await db.query(sql);
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error occurred while fetching data:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}