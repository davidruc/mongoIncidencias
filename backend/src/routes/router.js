import { Router } from "express";
import getInitRoute from "./getData.js";

const initApiRoutes = ()=>{
    const router = Router();
    router.use("/", getInitRoute());
    return router;
}

export default initApiRoutes;