import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/user.js";
import * as strategy from "./strategy.js";
export const initPassport=(passport)=>{
passport.use(
    "login",
    new LocalStrategy({ passReqToCallback: true }, strategy.login)
  );
  
  passport.use(
    "register",
    new LocalStrategy({ passReqToCallback: true }, strategy.register)
  );
  
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
}