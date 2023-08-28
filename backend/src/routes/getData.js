import { Router } from "express";
import * as controller from "../controllers/getDataController.js";
import routesVersioning from "express-routes-versioning";

const getInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning()
    router.get("/inicidencias", version({
        "^1.0.0": controller.obtenerIncidenciasController
    }))
    router.get("/trainers", version({
        "^1.0.0": controller.obtenerTrainersController
    }))
    return router
}
export default getInitRoute;