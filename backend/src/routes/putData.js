import { Router } from "express";
import * as controller from "../controllers/putDataController.js";
import routesVersioning from "express-routes-versioning";
import passportHelper from "../helpers/passportHelper.js";
import { postValidateIncidencia, postValidateTrainer } from "../middleware/middlewareValidate.js";
import { trainersPostDtoV1, incidenciasPostDtoV1 } from "../middleware/dataVerify.js";


const putInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.put("/inicidencia", incidenciasPostDtoV1, postValidateIncidencia, version({
        "^1.0.0": controller.updateIncidenciaController
    }))
    router.put("/trainer", trainersPostDtoV1, postValidateTrainer, version({
        "^1.0.0": controller.updateTrainerController
    }))
    return router;
}
export default putInitRoute;