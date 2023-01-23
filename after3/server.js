import express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import passport from "passport";
import router from "./router/router.js";
import { createServer as HttpServer} from "http";
import { Server as IOServer} from "socket.io";
import { initPassport } from "./passport/init.js";
import { sessionMongo } from "./middlewars/session.js";
import { socketEvent } from "./socket/event.js";
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000;
const MONGO_DB_URI = process.env.MONGO_DB_URI || "mongodb://localhost:477";
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
socketEvent(io)
app.use(cookieParser());
app.use(sessionMongo);
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport)
app.use(router);
const srv = httpServer.listen(PORT, async () => {
  console.log(`Servidor http escuchando en el puerto ${srv.address().port}`);
  try {
    await mongoose.connect(MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected DB",MONGO_DB_URI);
  } catch (error) {
    console.log(`Error en conexión de Base de datos: ${error}`);
  }
});
srv.on("error", (error) => console.log(`Error en servidor ${error}`));
