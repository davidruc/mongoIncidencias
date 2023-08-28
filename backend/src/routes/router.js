import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./putData.js";
import deleteInitRoute from "./deleteData.js";
import { limitPet } from "../helpers/limit.js";

const initApiRoutes = ()=>{
    const router = Router();
    router.use("/get", limitPet(), getInitRoute());
    router.use("/post", limitPet(), postInitRoute());
    router.use("/put", limitPet(), putInitRoute());
    router.use("/delete", limitPet(), deleteInitRoute());
    return router;
}

export default initApiRoutes;