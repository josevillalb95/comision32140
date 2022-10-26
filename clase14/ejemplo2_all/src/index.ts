import express from "express";
import { getUTC,getTime } from "./libs/utils";
import Persona from "./Persona";
const p: Persona = new Persona("Coder", "House");
const app = express();
app.get("/", (req, res) => {
 res.send({
   time: getTime(),
   name: p.getFullName(),
   utc:getUTC()
 });
});
const PORT = 8080;
app.listen(PORT, () => {
 console.log(`conectado al puerto: ${PORT}`);
});
