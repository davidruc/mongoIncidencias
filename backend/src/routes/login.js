import { limitPet } from "../helpers/limit.js";
import { crearToken } from "../helpers/JWT.js";
import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import { loginV1 } from "../../apis/V1/login.js"; 

const appLogin = Router();
const version = routesVersioning();

appLogin.use(limitPet(), crearToken);
 
appLogin.post("/", version({
    "1.0.0": loginV1
}))

export {appLogin};
