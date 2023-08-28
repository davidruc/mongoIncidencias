import { Router } from "express";
import * as controller from "../controllers/deleteDataController.js";
import routesVersioning from "express-routes-versioning";
import passportHelper from "../helpers/passportHelper.js";

const deleteInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.delete("/inicidencia", version({
        "^1.0.0": controller.deleteIncidenciaController
    }))
    router.delete("/trainer", version({
        "^1.0.0": controller.deleteTrainerController
    }))
    return router;
}
export default deleteInitRoute;