import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./putData.js";
import deleteInitRoute from "./deleteData.js";
import { limitPet } from "../helpers/limit.js";

const initApiRoutes = ()=>{
    const router = Router();
    router.use("/use", limitPet(), getInitRoute());
    router.use("/use", limitPet(), postInitRoute());
    router.use("/use", limitPet(), putInitRoute());
    router.use("/use", limitPet(), deleteInitRoute());
    return router;
}

export default initApiRoutes;