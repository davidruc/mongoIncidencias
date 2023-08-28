import { Incidencia } from "../collections/incidencia.js";
import { Trainer } from "../collections/trainer.js";

export const putServiceIncidencia = async (id, data)=>{
    const incidencia = new Incidencia();
    return await incidencia.putIncidencia(id, data)
}
export const putServiceTrainer = async (id, data)=>{
    const trainer = new Trainer();
    return await trainer.putTrainer(id, data)
}