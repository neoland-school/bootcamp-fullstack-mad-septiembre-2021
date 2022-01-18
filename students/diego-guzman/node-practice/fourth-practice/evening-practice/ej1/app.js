import express from 'express';
import router from './src/router.js'
import { MiddlewareFromApp } from './src/middleware.js';

const app = express();

export let counter= 0;

app.use(MiddlewareFromApp);

app.use('/router', router);


app.listen(3000,()=> console.log('El servidor está levantado'))