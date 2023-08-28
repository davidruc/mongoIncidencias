import * as services from "../services/putServices.js";

export const updateIncidenciaController = async(req, res, next)=>{
    try {
        const data = req.body;
        const {id} = req.query;
        const incidencia = await services.putServiceIncidencia(id, data);
        res.status(201).send(incidencia);
    } catch (error) {
        res.status(500).send(error)
    }
}
export const updateTrainerController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const data = req.body;
        const trainer = await services.putServiceTrainer(id, data);
        res.status(201).send(trainer);
    } catch (error) {
        res.status(500).send(error);
    }
}