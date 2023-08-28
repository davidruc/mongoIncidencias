import { Router } from "express";
import * as controller from "../controllers/putDataController.js";
import routesVersioning from "express-routes-versioning";
import passportHelper from "../helpers/passportHelper.js";

const putInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.put("/inicidencia", version({
        "^1.0.0": controller.updateIncidenciaController
    }))
    router.put("/trainer", version({
        "^1.0.0": controller.updateTrainerController
    }))
    return router;
}
export default putInitRoute;