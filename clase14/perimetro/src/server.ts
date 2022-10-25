import express from "express";
import Perimetro from "./Perimetro";
import Superficie from "./Superficie";
const p: Perimetro = new Perimetro();
const s: Superficie = new Superficie();
const app = express();
app.get("/cuadrado", (req, res) => {
  res.send({
    'figura':'cuadrado',
    'superficie':s.cuadrado(),
    'perimetro':p.cuadrado()
  });
});
app.get("/rectangulo", (req, res) => {
  res.send({
    'figura':'rectangulo',
    'superficie':s.rectangulo(),
    'perimetro':p.rectangulo()
  });
 });
 app.get("/circulo", (req, res) => {
  res.send({
    'figura':'circulo',
    'superficie':s.circulo(),
    'perimetro':p.circulo()
  });
 });
const PORT = 8080;
app.listen(PORT, () => {
 console.log(`conectado al puerto: ${PORT}`);
});
