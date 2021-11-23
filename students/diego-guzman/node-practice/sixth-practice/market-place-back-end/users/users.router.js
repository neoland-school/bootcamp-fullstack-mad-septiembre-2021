import express from 'express'
import { getUsersCtrl, createUserCtrl } from './users.controller.js'

const router  = express.Router();

router.route('/')
    .get(getUsersCtrl)
    .post(createUserCtrl)


export default router