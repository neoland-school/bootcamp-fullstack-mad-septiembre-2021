// 3- Pintar  por consola en el servidor, la fecha y el path de todas as peticiones que se hagan (pista: Crear un  middleware)

export const middlewareInf = (req, res, next) => {
        let fecha = new Date().toLocaleString();
        console.log(`Fecha: ${fecha} \n path: ${req.path}`)
        next();
}