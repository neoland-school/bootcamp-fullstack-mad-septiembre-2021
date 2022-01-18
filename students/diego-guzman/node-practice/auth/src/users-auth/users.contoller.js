import { getUserName } from './users.model.js'
import jwt from 'jsonwebtoken'

import { token } from '../../config'

function createToken(user){
   return jwt.sign(user,token);
}


export async function getUserNameCtrl(req,res){
    const exists = await getUserName(req.body)
    if(exists!==null){
        res.send(createToken({userName:req.body.userName})).status(200) //al tener dos respuestas esta tiene que ir en minuscula
    }
    else(res.sendStatus(404))
}