import { Router } from "express";
import * as controller from "../controllers/getDataController.js";
import passportHelper from "../helpers/passportHelper.js";
import routesVersioning from "express-routes-versioning";

const getInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.get("/incidencia", version({
        "^1.0.0": controller.obtenerIncidenciasController
    }))
    router.get("/trainer", version({
        "^1.0.0": controller.obtenerTrainersController
    }))
    return router
}
export default getInitRoute;