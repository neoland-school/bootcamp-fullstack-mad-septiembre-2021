// 1. Crear una aplicación express que tenga un endpoint (`/auth/login`) que sea de tipo POST. Acepta usuario y password. Este endpoint buscará en la BBDD de usuarios que exista un usuario con ese email y ese password. Si existe genera un JWT y lo devuelve al usuario. (podéis enganchar con el ejercicio de registro del otro día o dar de alta a mano en una BBDD a los usuarios)


import  express from 'express';
import userRouter  from './src/users/user.router.js'

const app = express();
app.use(express.json());

app.use('/auth/login', userRouter)

app.listen(3001, () => console.log('servidor funcionando en puerto 3001'));