import express from "express";
import { devolverUser, crearUsuario } from "./user.controller.js";

const router = express.Router();

router.route('/')
    .get(devolverUser)
    .post(crearUsuario);


export default router;