
import express from 'express';
import { MiddlewareFromRoute } from './middleware-from-route.js';
import { MiddlewareFromRouter } from './middleware-from-router.js';

const router = express.Router();


router.use(MiddlewareFromRouter)

const getAnswer =(req,res)=>{
    res.send('Router from application says Hi' + req.counter)
}

const getAnserRoute = (req,res)=>{
    res.send('Route from application says Hi' + req.counter);
    
}

router.route('/')
    
    .get(getAnswer)

router.route('/route')
    .all(MiddlewareFromRoute)  
    .get(getAnserRoute)



export default router