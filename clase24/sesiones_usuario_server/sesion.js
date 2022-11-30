const session = require('express-session');
// FileStore
const FileStore= require('session-file-store')(session)
// Redis
const {createClient} = require('redis')
const redisClient= createClient({
    legacyMode:true,
    url:'redis://localhost:900'
})
redisClient.connect().catch(e=>console.log("redis error",e))
const RedisStore=require('connect-redis')(session)
// mongo
const MongoStore=require('connect-mongo')
const MongoURI=process.env.MONGO_URI||'mongodb://localhost:477'
const mongoOptions={useNewUrlParser:true, useUnifiedTopology:true}
const sesiones={
    fileStore:session({
        store: new FileStore({path:'./sesiones',ttl:60,retries:0}),
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000
        }
    }),
    redis:session({
        store:new RedisStore({client:redisClient,ttl:60}),
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    }),
    mongo:session({
        store:MongoStore.create({
            mongoUrl:`${MongoURI}?dbName=session`,
            mongoOptions,
            ttl:60,
            collectionName:'sessions'
        }),
        secret:'secret',
        resave: false,
        saveUninitialized: false
    })


}
module.exports= sesiones