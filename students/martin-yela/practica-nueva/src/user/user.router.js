import express from 'express';
import {registerUserCtrl} from './user.controller.js'
import multer from "multer";
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { comprobationMiddleware } from './user.middleware.js';

const storage = multer.diskStorage({
    destination:  './public-avatar',
    filename: function (req, file, cb) {
      cb(null, uuidv4() + path.extname(file.originalname));
    }
  })

const upload = multer({ storage: storage });

const processMultiparBody = multer();

const router = express.Router();

router.route('/')
    .post(processMultiparBody.any(), comprobationMiddleware, upload.single('avatar'), registerUserCtrl);

export default router;