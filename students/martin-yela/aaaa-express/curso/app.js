import express from 'express';
import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());
let listaCurso = [];
const pathCursosJson= path.dirname(process.argv[1]) + '/cursos.json';

async function traerCursos() {
    try {
        await fs.access(pathCursosJson, constants.R_OK | constants.W_OK);
        let listaString = await fs.readFile(pathCursosJson, { encoding: 'utf-8' });
        listaCurso = JSON.parse(listaString);
    } catch (error) {
        fs.writeFile(pathCursosJson, '[]')
    }
}
traerCursos();

app.get('/mostrarCurso', (req, res) => {
    res.send(listaCurso)
})

app.post('/crearCurso', (req, res) => {
    res.send('Acá arma el curso')
    const objCurso = {"nombre" : req.body.nombre , "escuela" : req.body.escuela, "profesores" : req.body.profe, "fecha de inicio" : req.body.inicio, "fecha fin" : req.body.fin}
    listaCurso.push(objCurso);
    fs.writeFile(pathCursosJson, JSON.stringify(listaCurso));
})

app.listen(3001, () => console.log('el servidor funciona'))