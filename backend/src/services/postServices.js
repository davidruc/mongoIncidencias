import { Incidencia } from "../collections/incidencia.js";
import { Trainer } from "../collections/trainer.js";

export const postServiceIncidencia = async(data) =>{
    const incidencia = new Incidencia();
    return await incidencia.postIncidencia(data);
}
export const postServiceTrainer = async (data)=>{
    const trainer = new Trainer();
    return await trainer.postTrainer(data)
}
