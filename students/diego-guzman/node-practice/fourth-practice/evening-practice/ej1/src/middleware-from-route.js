

export const MiddlewareFromRoute = (req,res,next)=>{
    req.counter++;
    console.log("Hola mundo Ruta Middleware");
    next()
}