import express from 'express';
import alumnosRouter from './alumnos.router.js'
import profesoresRouter from './profesore.router.js'
import { middlewareInf } from './middleware.inf.js';
import { middlewareAlumnos } from './middleware.alumnos.js';

const app = express();

app.use(middlewareInf)
app.use('/alumnos', middlewareAlumnos, alumnosRouter);
app.use('/profesores',profesoresRouter);


app.listen(3000, () => {
    console.log('Servidor funcionando')
})