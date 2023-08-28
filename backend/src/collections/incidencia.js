import { collectionGen } from "../../db/connection.js";
import siguienteId from "../helpers/Autoincrement.js";

class Incidencia{
    _id;
    id_incidencia;
    trainerId;
    categoria;
    tipo_incidencia;
    fecha_reporte;
    area_incidencia;
    equipo_averiado;
    color_equipo;
    codigo_equipo;
    descripcion;
    constructor(){}
    async connection(){
        try {
            const result = await collectionGen("incidencia");
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getIncidencias(id){
        try {
            const connection = await this.connection();
            if(!id) return await connection.find({}).toArray();
            return await connection.aggregate([{ $match:{ "id_incidencia": parseInt(id)} }]).toArray();
        } catch (error) {
            throw error;
        }
    };
    async postIncidencia(data){
        try {
            const connection = await this.connection();
            const newId = await siguienteId("incidencia");
            const result = await connection.insertOne({id_incidencia: newId, ...data});
            return result;
        } catch (error) {
            throw error;
        }
    };
    async putIncidencia(id, data){
        try {
            const connection = await this.connection();
            const result = await connection.updateOne(
                {"id_incidencia": parseInt(id)}, 
                {$set: data}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteIncidencia(id){
        try {
            const connection = await this.connection();
            const result = await connection.deleteOne({"id_incidencia": parseInt(id)})
            return result;
        } catch (error) {
            throw error; 
        }
    }
}
export { Incidencia }