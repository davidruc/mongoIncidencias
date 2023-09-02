import { collectionGen } from "../../db/connection.js";
import siguienteId from "../helpers/Autoincrement.js";

class Trainer{
    _id;
    id_trainer;
    nombre;
    rol;
    permisos;
    email_personal;
    email_corporativo;
    telefono_movil;
    telefono_residencia;
    telefono_empresa;
    telefono_movil_empresarial;
    cuenta_bancaria;
    constructor(){}
    async connection(){
        try {
            const result = await collectionGen("trainer");
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getTrainers(id){
        try {
            const connection = await this.connection();
            if(!id) return await connection.find({}).toArray();
            return await connection.aggregate([{ $match:{ "id_trainer": parseInt(id)} }]).toArray();
        } catch (error) {
            throw error;
        }
    }
    async postTrainer(data){
        try {
            const connection = await this.connection();
            const newId = await siguienteId("trainer");
            let permiss = {
                "/api/use": ["1.0.0", "3.5.0", "GET", "POST"]
            }
            const result = await connection.insertOne({id_trainer: newId, ...data, permisos: permiss});
            return result;
        } catch (error) {
            throw error;
        }
    };
    async putTrainer(id, data){
        try {
            const connection = await this.connection();
            const result = await connection.updateOne(
                {"id_trainer": parseInt(id)}, 
                {$set: data}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteTrainer(id){
        try {
            const connection = await this.connection();
            const result = await connection.deleteOne({"id_trainer": parseInt(id)})
            return result;
        } catch (error) {
            throw error; 
        }
    }
}
export { Trainer }