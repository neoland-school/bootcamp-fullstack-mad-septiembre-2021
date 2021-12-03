// 2-  Crear un servidor http expressjs con una ruta GET en un router, que devuelva un texto indicando por cuantos middleware custom ha pasado. La respuesta de la ruta tiene que decir: "HE pasado por X middlewares", siendo X el número de middlewares por los que ha pasado o 0 si no ha pasado por ninguno. Añadir un middleware de app, otro de router y otro de ruta que aumenten en uno el numero de middlewares actuales de la peticion. 

import express from 'express';
import contadorRouter from './new.router.js'
import { appMidleware } from './app.midleware.js';

const app = express();

app.use('/contador', appMidleware, contadorRouter);

app.listen(3000, () => {
    console.log('servidor esperando a postman')
})