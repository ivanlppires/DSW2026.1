import express from 'express';
import alunos from './routes/alunos.js';
const router = express.Router();

router.use('/alunos', alunos);

export default router;