import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'ivanpires',
    password: '123456',
    database: 'alunos20262',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;