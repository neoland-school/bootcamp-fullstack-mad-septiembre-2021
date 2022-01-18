import express from 'express'
import router from './src/users-auth/users.router.js'

const app = express()

app.use(express.json())

app.use('/auth/login', router)

app.listen(3001, console.log('El servidor está levantado'))