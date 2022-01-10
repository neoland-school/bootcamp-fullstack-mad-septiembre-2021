import express from 'express'
import { getUserNameCtrl } from './users.contoller.js'

const router = express.Router()

router.route('/')
    .post(getUserNameCtrl)


export default router