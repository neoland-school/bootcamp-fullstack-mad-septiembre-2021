import { getUser, crearUser } from "./user.model.js";

export async function devolverUser(req, res) {
    let list = await getUser();
    res.send(list);
}
export async function crearUsuario(req, res) {
    let mensaje = await crearUser(req.body);
    mensaje === 'ko' ? res.status(402).send('ko') : res.status(200).send('ok');
}