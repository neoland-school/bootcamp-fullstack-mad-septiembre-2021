import { registerUser } from './sn.model.js'



export async function registerUserCtrl(req,res){
    const id = await registerUser({...req.body, 'avatar': req.file.path})
    res.json({id})
   
}