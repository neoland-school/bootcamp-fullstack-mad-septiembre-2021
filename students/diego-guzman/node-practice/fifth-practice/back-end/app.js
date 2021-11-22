import fs from 'fs/promises'
import { FILE_DATA_PATH, getDataFromStorage } from "./data/data.js"
import express from 'express'
import cors from 'cors'


const app =  express();
app.use(express.json())
app.use(cors())

let courses =[]
console.log(courses)

getDataFromStorage().then(c=>courses=c)

app.get('/courses', (req,res)=>{
    res.send(courses)
})


app.post('/courses', (req,res)=>{
    const newCourse = req.body
    courses.push(newCourse)
    fs.writeFile(FILE_DATA_PATH, JSON.stringify(courses))
    res.send(courses)
})

app.listen(3001, ()=>console.log('Servidor levantado'))