import { createUser, retrieveUsers } from "./users.model.js"

export async function getUsersCtrl(req,res){
    const users = await retrieveUsers()
    res.json(users)
}

export async function createUserCtrl(req,res){
    const userName =req.body.name 
    const userPassword = req.body.password
    const users = await retrieveUsers()
    users.some(u=>{
        if(u.name===userName||u.password===userPassword){
        res.sendStatus(404)
    }
    else{
        const id = createUser(req.body);
        res.json('ok')
    }})
    
}