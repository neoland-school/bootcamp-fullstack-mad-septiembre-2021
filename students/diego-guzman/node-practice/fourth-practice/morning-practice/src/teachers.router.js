import express from 'express';

const router = express.Router();


const getTeachers = (req,res)=>{
    res.send('Hola profesores')
}


router.route('/')
    .get(getTeachers)

export default router