import express from 'express'
import router from './src/sn/sn.router.js'

const app = express()

app.use(express.json())

app.use('/register', router)


app.listen(3001, ()=>console.log('El servidor está levantado'))