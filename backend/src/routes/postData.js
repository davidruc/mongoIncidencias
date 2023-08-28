import { Router } from "express";
import * as controller from "../controllers/postDataController.js";
import routesVersioning from "express-routes-versioning";
import passportHelper from "../helpers/passportHelper.js";

const postInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.post("/inicidencia", version({
        "^1.0.0": controller.postIncidenciaController
    }))
    router.post("/trainer", version({
        "^1.0.0": controller.postTrainerController
    }))
    return router;
}

export default postInitRoute;