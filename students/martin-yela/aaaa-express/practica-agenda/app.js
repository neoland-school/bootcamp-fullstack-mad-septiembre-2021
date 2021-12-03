// 3. Vamos a hacer un back-end en expressjs de una agenda de contactos con persistencia en ficheros. Nuestro back-end tiene que permitir las siguientes operaciones:
// - Devolver toda la lista de contactos (se podrá filtrar los contactos por empresa)
// - Devolver una lista de contactos buscando por teléfono
// - Devolver un contacto concreto buscando por alias
// - Crear un contacto
// - Actualizar un contacto
// - Eliminar un contacto
// - añadir un número de teléfono a un contacto

import express from 'express';
import path from 'path';
import fs from 'fs/promises'
import { constants } from 'fs';
import agendaRouter from './agenda.router.js'

export const listContactos = [];
export const listPath = path.dirname(process.argv[1]) + '/agenda.json';
const app = express();
app.use(express.json())

async function initListContact() {
    try {
        await fs.access(listPath, constants.R_OK | constants.W_OK);
        listContactos = await fs.readFile(listPath, { encoding: 'utf-8' });
        listContactos = JSON.parse(listContactos);
        console.log(listContactos + 'dentro')
    } catch (error) {
        fs.writeFile(listPath, '[]')
        console.log(listContactos + 'err')
    }
}
initListContact();



app.use('mostrar',agendaRouter)

app.listen(3000, () => console.log('Ya está funcionando el servidor de la agenda'))