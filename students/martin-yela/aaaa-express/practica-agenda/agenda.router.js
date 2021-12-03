import express from 'express';
import { listContactos } from './app.js';

const router = express.Router();

const filtroEmpresa = (req, res) => {
    const empresa = req.empresa;
    const filtradoDeEmpresa = empresa === undefined
        ? listContactos
        : listContactos.filter(e => e.empresa === empresa);
    
    res.json(filtradoDeEmpresa);
}

router.route('/:empresa')
    .get(filtroEmpresa)

export default router;