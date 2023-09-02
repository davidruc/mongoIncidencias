import { Incidencia } from "../collections/incidencia.js";
import { Trainer } from "../collections/trainer.js";

export const obtenerIncidencias = async(id)=>{
    const incidencia = new Incidencia();
    return await incidencia.getIncidencias(id);
}
export const obtenerTrainers = async(id)=>{
    const trainer = new Trainer();
    return await trainer.getTrainers(id);
}
