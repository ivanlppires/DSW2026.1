import express from 'express';
import cors from 'cors'; // liberar acesso a API (XSS)
import jwt from 'jsonwebtoken'; // JWT - JSON Web Token

const app = express();
app.use(express.json()); // Habilita o uso de JSON no corpo da requisição
app.use(cors()); // Acesso liberado

const validar = (req, res, next) => {
    const headers = req.headers;
    if(!headers.authorization)
        res.status(403).send('Token não informado');
    
    const token = headers.authorization.split(' ')[1];
    const tokenIsValid = jwt.verify(token, 'UNEMAT123');
    if (!tokenIsValid)
        res.status(403).send('Acesso negado');
    next();
}
app.post('/login', (req, res) => {
    if(!req.body)
        res.status(400).send('Requisição inválida');
    const { user, pass } = req.body;
    if(!user || !pass) {
        res.status(400).send('Usuário e senha são obrigatórios');
    }
    if(user === 'admin' && pass === '123') {
        const token = jwt.sign( { user }, 'UNEMAT123', { expiresIn: '5m' }  );
        res.send({ token });
    } else {
        res.status(401).send('Credenciais inválidas');
    }
});

app.get('/clientes', validar, (req, res) => {
    res.json({ clientes: 'Lista de clientes' });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})