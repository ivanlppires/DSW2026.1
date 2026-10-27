import express from 'express';
import * as alunos from '../controllers/alunos.js';

const router = express.Router();

router.post('/', alunos.cadastrar)
router.get('/', alunos.listar)

export default router;