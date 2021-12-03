// 1- Crear un servidor http expressjs con una ruta GET en un router, que devuelva un texto que diga "Hola Router". Añadir a esa aplicación lo siguiente:
//  Un middleware de aplicación que pinte por consola en el servidor "Hola mundo App Middleware"
//  Un middleware de ruter que pinte por consola en el servidor "Hola mundo Router Middleware"
//  Un middleware de ruta que pinte por consola en el servidor "Hola mundo Ruta Middleware"

import express from 'express';
import { middlewareRoute } from './middleware.route.js';


const router = express.Router();
router.use(middlewareRoute)
const saludo = (req, res) => {
    res.send('Hola Router')
}

router.route('/')
    .get(saludo);


export default router;