// 2-Añadir un router que tenga un get de profesores. Este método devuelve al cliente 'hello profesores' y debe estar en el path '/profesores'

import express from "express";

const router = express.Router();

const helloProfesores = (req, res) => {
    res.send('hello profesores');
}

router.route('/')
    .get(helloProfesores)

export default router;