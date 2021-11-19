import express from 'express';

const router = express.Router();

let counter = 0;

const getStudents = (req, res) => {
    counter++;
    if (counter <= 10) {
        res.send('Hello alumnos')
    }
    else{
        res.sendStatus(429)
    }
}

router.route('/')
    .get(getStudents)



export default router