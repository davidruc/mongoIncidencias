import * as services from "../services/getServices.js"

export const obtenerIncidenciasController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const incidencia = await services.obtenerIncidencias(id);
        res.status(200).send(incidencia);
    } catch (error) {
        res.send(error);
    }
};

export const obtenerTrainersController = async(req, res, next)=>{
    try {
        const trainer = await services.obtenerTrainers();
        res.status(200).send(trainer);
    } catch (error) {
        res.send(error);
    }
}