// indexar todas as rotas
import express from 'express';
import alunos from './routes/alunos.js';
import cursos from './routes/cursos.js';

const router = express.Router();

router.use('/alunos', alunos);
router.use('/cursos', cursos);

export default router;