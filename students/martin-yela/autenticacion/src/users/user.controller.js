import { authLogin } from "./user.model.js";
import  jsw from "jsonwebtoken";

function createToken(mail){
    return jsw.sign(mail, 'shhhhh')
}

export async function authUser(req, res) {
    const myUser = await authLogin(req.body.email, req.body.password);
    if (myUser === null){
        res.sendStatus('404');
    } else {
        res.send(createToken({email: req.body.email}));
    }
}