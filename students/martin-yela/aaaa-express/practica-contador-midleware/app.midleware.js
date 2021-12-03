let counter = 0;

export const appMidleware = (req, res, next) => {
    req.contador = counter;
    req.contador++;
    next();
}