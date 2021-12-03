import  express, { Router } from "express";
import cors from 'cors'
import userRouter from './users/user.router.js'


const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRouter);



app.listen(3001, () => console.log('Servidor iniciado en el puerto 3001'));