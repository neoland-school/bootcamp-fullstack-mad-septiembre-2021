import express from 'express'
import router from './users/users.router.js'

const app = express()
app.use(express.json())

app.use('/users', router)

app.listen(3001, ()=>console.log('El servidor está levantado'))