// 4- Devolver 429 (too many request) a partir de la 10 petición a un endpoint de alumnos. Es decir las primeras 10 peticiones devuelven 200 y a partir de ahí 429.

let contador = 0;

export const middlewareAlumnos = (req, res, next) => {
    contador++;
    if (contador === 10) {
        res.sendStatus(429)
    } else {
        next();
    }
    
}