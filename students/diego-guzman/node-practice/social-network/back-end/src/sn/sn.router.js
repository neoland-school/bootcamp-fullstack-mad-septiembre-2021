import express from 'express'
import { registerUserCtrl } from './sn.controller.js'
import multer from 'multer'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import { userComprobationMiddleware } from './userComprobation-middleware.js'



const storage = multer.diskStorage({
    destination:'./public/avatar',
    filename: function (req, file, cb) {
      cb(null, uuidv4() + path.extname(file.originalname));
    }
  })

const onlyText = multer()
const upload = multer({ storage: storage})

const router = express.Router()

router.route('/')
    .post(onlyText.any(), userComprobationMiddleware, upload.single('avatar'),registerUserCtrl)


export default router