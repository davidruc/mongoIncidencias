import { Router } from "express";
import * as controller from "../controllers/postDataController.js";
import routesVersioning from "express-routes-versioning";
import passportHelper from "../helpers/passportHelper.js";
import { postValidateIncidencia, postValidateTrainer } from "../middleware/middlewareValidate.js";
import { trainersPostDtoV1, incidenciasPostDtoV1 } from "../middleware/dataVerify.js";

const postInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.post("/inicidencia",incidenciasPostDtoV1 ,version({
        "^1.0.0": postValidateIncidencia
    }), controller.postIncidenciaController)
    router.post("/trainer", trainersPostDtoV1 , version({
        "^1.0.0": postValidateTrainer
    }), controller.postTrainerController)
    return router;
}

export default postInitRoute;