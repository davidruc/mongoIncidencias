import { Incidencia } from "../collections/incidencia.js";
import { Trainer } from "../collections/trainer.js";

export const obtenerIncidencias = async(id)=>{
    const incidencia = new Incidencia();
    return await incidencia.getIncidencias(id);
}
export const obtenerTrainers = async()=>{
    const trainer = new Trainer();
    return await trainer.getTrainers();
}

/* import { Habitat } from "../collections/Habitats.js";

export const getServiceHabitat = async(id)=>{
    const habitat = new Habitat();
    return await habitat.getHabitat(id);
};

 */

/* el valor id se envía como parámetro a la función "getServiceHabitat(id)" y este dato se envía desde los parámetros de la solicitud (req.query)*/