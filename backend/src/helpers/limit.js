import rateLimit from "express-rate-limit";

export let limitPet = ()=>{
    return rateLimit({
        windowMs: 30*1000,
        max: 5,
        standarHeaders:true,
        legacyHeaders:false,
        skip: (req, res)=>{
            if(req.headers["content-length"]>500){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño es demasiado grande"
                });
                return true;
            }
        },
        message: (req, res)=>{
            res.status(429).send({
                status: 429,
                message: "ya se terminó el número de solicitudes permitidas por el servidor"
            })
        }
    })
}