import initApiRoutes from "./src/routes/router.js";
import config from "./src/utils/config.js";
import express  from "express";
import { appLogin } from "./src/routes/login.js";

const app = express();

app.use(express.json());
app.use("/api", initApiRoutes());
app.use("/login", appLogin);

app.listen(config.server, ()=>{
    console.log(`El servidor está activo: http://${config.server.hostname}:${config.server.port}`);
});