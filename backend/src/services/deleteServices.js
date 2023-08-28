import { Incidencia } from "../collections/incidencia.js";
import { Trainer } from "../collections/trainer.js";

export const deleteServiceIncidencia = async(id)=>{
    const incidencia = new Incidencia();
    return await incidencia.deleteIncidencia(id);
}
export const deleteServiceTrainer = async(id)=>{
    const trainer = new Trainer();
    return await trainer.deleteTrainer(id);
}
