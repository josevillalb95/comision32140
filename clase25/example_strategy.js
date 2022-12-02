import { Router } from "express";
import passport from "passport";
import { Strategy } from "passport-local";

// formato
//1)  {opt} , funcion login || register
//2)  funcion login || register
// funcion login || register
// 1)
// req
// username
// password
// callback
// 2)
// username
// password
// callback

passport.use(
  "login",
  new Strategy((req, user, pasw, callback) => {
    const { fecha_suscripcion, pago_ok } = req.body;
    DB.findOne({ user, pasw, fecha_suscripcion, pago_ok }, (err, user) => {
      if (err) return callback(err);
      if (!user) return callback(null, false);
      callback(null, user);
    });
  })
);

const goPerfil = (req, res) => {
  req.redirect("/perfil");
};
Router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/error" }),
  goPerfil
);
