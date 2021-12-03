import express from 'express';
import userRouter from './user/user.router.js'

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.listen(3001, () => console.log('Servidor 3001 en funcionamiento'));