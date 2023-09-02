import * as services from "../services/postServices.js"

export const postIncidenciaController = async(req, res, next)=>{
    try {
        const data = req.body;
        const incidencia = await services.postServiceIncidencia(data);
        res.status(201).send(incidencia)
    } catch (error) {
        res.status(500).send(error);
    }
}
export const postTrainerController = async(req, res, next)=>{
    try {
        const data = req.body;
        const trainer = await services.postServiceTrainer(data);
        res.status(201).send(trainer);
    } catch (error) {
        res.status(500).send(error);
    }
}