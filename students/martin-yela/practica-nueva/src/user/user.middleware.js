import { retrieverUser } from './user.model.js'

export async function comprobationMiddleware(req, res, next) {
    const mail = req.body.email;
    if (isEmail(mail)) {
        if (await retrieverUser(mail) === null) {
            next();
        } else {
            res.sendStatus('404');
        }

    } else {
        res.sendStatus('404')
    }
}

function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}