import express from 'express';
import cors from 'cors';
import alunosRoutes from './routes/alunos.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/alunos', alunosRoutes);   

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
