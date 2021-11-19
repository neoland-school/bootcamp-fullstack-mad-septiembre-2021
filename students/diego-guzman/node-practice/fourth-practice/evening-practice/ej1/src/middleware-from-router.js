

export const MiddlewareFromRouter = (req,res,next)=>{
    req.counter++;
    console.log("Hola mundo Router Middleware"),
    next();
}