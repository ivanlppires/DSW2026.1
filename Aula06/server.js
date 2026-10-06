import express from 'express';
const app = express();
// Usando Json
// middleware para habilitar o uso de JSON no corpo da requisição
app.use(express.json());

const clientes = [];
/* usando endpoints */
/* Métodos HTTP: GET, POST, PUT, DELETE */
// Endpoint GET - obter informações

app.get('/', (req, res) => {
    res.send('Hello World');
});

/* EXEMPLO DE CRUD clientes - CREATE, READ, UPDATE, DELETE */

// CREATE - criar um novo cliente. Método POST
app.post('/clientes', (req, res)=>{ // req = requisição, res = resposta
    const cliente = req.body;
    clientes.push(cliente);
    res.send('Cliente criado com sucesso');
});

// READ - obter informações de cliente. Método GET'
// Read ALL
app.get('/clientes', (req, res)=>{
    res.json(clientes);
});
// Read ONE
// Busca de cliente por ID (:id é um parâmetro de rota)
app.get('/clientes/:id', (req, res)=>{
    console.log(req.params.id)
    res.send(`Cliente com ID ${req.params.id}`);
});
// UPDATE - atualizar informações de cliente. Método PUT
app.put('/clientes/:id', (req, res) => {
    res.send(`Cliente com ID ${req.params.id} atualizado com sucesso`);
})
// DELETE - deletar informações de cliente. Método DELETE
app.delete('/clientes/:id', (req, res) => {
    res.send(`Cliente com ID ${req.params.id} deletado com sucesso`);
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});