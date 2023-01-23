import { User } from "../models/user.js";
import bCrypt from "bcrypt";
const validatePassword = (user, password) => {
	return bCrypt.compareSync(password, user.password);
};
var createHash = function (password) {
	return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};
const login=(req, username, password, cb) => {
    User.findOne({ username: username }, (err, user) => {
        if (err) return cb(err);
        if (!user) {
            console.log("User Not Found with username " + username);
            return cb(null, false);
        }
        if (!validatePassword(user, password)) {
            console.log("Invalid Password");
            return cb(null, false);
        }
        return cb(null, user);
    });
}

const register= (req, username, password, cb) =>{
    // const findOrCreateUser = function () {
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            console.log("Error in SignUp: " + err);
            return cb(err);
        }
        if (user) {
            console.log("User already exists");
            return cb(null, false);
        } else {
            const newUser = new User();
            newUser.username = username;
            newUser.password = createHash(password);
            newUser.save().then(datos => cb(null,datos)).catch(null,false)
        }
    });
    // };
    // process.nextTick(findOrCreateUser);
}

export {login,register}