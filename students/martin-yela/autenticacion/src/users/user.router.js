import  express  from "express";
import { authUser } from "./user.controller.js";

const router = express.Router();

router.route('/')
    .post(authUser)

export default router;