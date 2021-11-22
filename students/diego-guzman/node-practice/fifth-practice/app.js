import { getDataFromStorage } from "./data/data.js"
import express from 'express'

const app =  express();

let courses =[]

getDataFromStorage().then(c=>courses=c)



app.post('/curso', (req,res)=>{
    
})

app.listen(3001, ()=>console.log('Servidor levantado'))