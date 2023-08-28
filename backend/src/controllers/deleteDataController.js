import * as services from "../services/deleteServices.js";

export const deleteIncidenciaController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const incidencia = await services.deleteServiceIncidencia(id);
        res.status(201).send(incidencia);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const deleteTrainerController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const trainer = await services.deleteServiceTrainer(id);
        res.status(201).send(trainer);
    } catch (error) {
        res.status(500).send(error);
    }
}