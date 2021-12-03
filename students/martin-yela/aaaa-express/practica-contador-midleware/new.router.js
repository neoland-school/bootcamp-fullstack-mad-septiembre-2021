import express  from "express";
import {routerMiddleware} from './router.midleware.js'
import  {routeMiddleware} from "./route.middleware.js";

const router = express.Router();

router.use(routerMiddleware);

const counterMiddleware = (req, res) => {
    res.send(`He pasado por ${req.contador} middleware`)
}

router.route('/')
    .get(routeMiddleware, counterMiddleware)

export default router;