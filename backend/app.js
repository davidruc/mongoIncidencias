import initApiRoutes from "./src/routes/router.js";
import config from "./src/utils/config.js";
import express  from "express";

const app = express();

app.use(express.json());
app.use("/", initApiRoutes());
/* app.use("/login"); */

app.listen(config.server, ()=>{
    console.log(`El servidor está activo: http://${config.server.hostname}:${config.server.port}`);
})