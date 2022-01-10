import { getUserEmail } from "./sn.model.js";


function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

export async function userComprobationMiddleware(req, res, next) {

    if (isEmail(req.body.email)) {
        if (getUserEmail(req.body.email) === null) {
            next()   
        }
        else {
            console.log('user exists')
        }
    }
    else{
        console.log('invalid email')
    }
}