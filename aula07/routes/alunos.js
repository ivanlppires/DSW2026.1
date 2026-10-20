import express from 'express';
const router = express.Router();
import {
    listaAlunos,
    buscaAluno,
    criaAluno,
    atualizaAluno,
    removeAluno,
} from '../controllers/alunos.js';

/* ROTAS DE /alunos */

router.get('/', listaAlunos);
router.get('/:id', buscaAluno);
router.post('/', criaAluno);
router.put('/:id', atualizaAluno);
router.delete('/:id', removeAluno);

export default router;