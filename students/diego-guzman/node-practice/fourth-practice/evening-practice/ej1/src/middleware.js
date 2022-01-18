
let counter = 0;

export const MiddlewareFromApp = (req,res,next)=>{
    req.counter = counter;
    req.counter++;
    console.log("Hola mundo App Middleware");
    next();
}