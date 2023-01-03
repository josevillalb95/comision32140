import express from "express";
import compression from "compression";

const app = express();

const mensaje = "Hola que tal ";
let mensajeMax = (text, times) => {
  let result = "";
  for (let index = 0; index < times; index++) {
    result+=text
  }
  return result ;
};

app.get("/saludo", (req, res) => {
  res.status(200).send(mensajeMax(mensaje, 100000));
});

app.get("/saludozip", compression(), (req, res) => {
  res.status(200).send(mensajeMax(mensaje, 100000));
});

const PORT = parseInt(process.argv[2]) || 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
