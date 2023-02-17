import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema =buildSchema( `    
   input RecordatorioInput {
        titulo: String,
        descripcion: String,
        time: Float
    }
    type Recordatorio {
        id: ID!
        titulo: String,
        descripcion: String,
        time: Float
    }
    
    type Query {
        getRecordatorios:[Recordatorio]

    }
    type Mutation {
        createRecordatorio(datos:RecordatorioInput):Recordatorio
    }
`)

const recordatorios=[]

function getRecordatorios(){
    return recordatorios
}

class Recordatorio {
    constructor( id, {titulo, descripcion, time}){
        this.id=id
        this.descripcion=descripcion
        this.time=time
        this.titulo=titulo
    }
}

function createRecordatorio({datos}){
    const id="recordatorio_"+new Date().getTime()
    const nuevoRecordatorio=new Recordatorio(id,datos);
    recordatorios.push(nuevoRecordatorio)
    return nuevoRecordatorio;
}

const app=express()
app.use(express.static('public'))
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:{
        getRecordatorios,
        createRecordatorio
    },
    graphiql:true
}))

const PORT = 8080
app.listen(PORT, () => {
    const msg = `Servidor corriendo en puerto: ${PORT}`;
    console.log(msg)
});
