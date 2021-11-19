import { getContactList } from "./src/data-base/data.js";
import express from 'express'
import router from './src/router/router.js'

const app = express()

getContactList();

app.use('/contactlist', router)


app.listen(3000, ()=>{
    console.log('servidor levantado')
})


