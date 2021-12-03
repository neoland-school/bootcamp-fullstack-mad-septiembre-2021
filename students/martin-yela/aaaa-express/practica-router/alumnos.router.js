// 1- Crear una app con un router que tenga un get de alumnos. Este método devuelve al cliente 'hello alumnos' y debe estar en el path '/alumnos'

import express from 'express';

const router = express.Router();

const helloAlumnos = (req, res) => {
    res.send('hello alumnos')
}

router.route('/')
        .get(helloAlumnos)


export default router;
