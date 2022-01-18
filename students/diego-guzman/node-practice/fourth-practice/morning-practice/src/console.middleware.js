
let date = new Date;

date = date.toLocaleString()
export const consoleMiddleware = (req,res,next)=>{
    console.log(`${date} ${req.path}`);
    next();

}