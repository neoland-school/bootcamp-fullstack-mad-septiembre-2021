import express from "express";
import saludoRouter from './hola-router.js'
import { middlewareServidor } from './middleware.servidor.js';
import { middlewareRouter } from "./middleware.router.js";

const app = express();

app.use(middlewareServidor);

app.use('/saludo', middlewareRouter, saludoRouter)

app.listen(3000, ()=>{
    console.log('El servidor está funcionando en el puerto 3000')
})

