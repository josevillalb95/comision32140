import session from "express-session";
import MongoStore from "connect-mongo";
const MONGO_DB_URI = process.env.MONGO_DB_URI || "mongodb://localhost:477";
export const sessionMongo = session({
  store: MongoStore.create({
    mongoUrl: MONGO_DB_URI,
    ttl: 600,
  }),
  secret: "sh",
  resave: false,
  saveUninitialized: false,
  rolling: false,
  cookie: {
    maxAge: 600000,
  },
});
