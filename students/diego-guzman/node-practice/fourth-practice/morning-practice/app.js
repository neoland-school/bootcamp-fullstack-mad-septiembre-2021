import express from 'express';
import studentsRouter from './src/studens.router.js';
import teachersRouter from './src/teachers.router.js';
import { consoleMiddleware } from './src/console.middleware.js';


const app = express();

app.use('/students', consoleMiddleware,  studentsRouter);
app.use('/teachers', consoleMiddleware, teachersRouter);

app.listen(3000, () => console.log('Hola soy un server HTTP'))