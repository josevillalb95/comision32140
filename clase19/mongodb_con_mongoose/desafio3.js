const mongoose = require('mongoose');
const { estudiantes } = require('./models/estudiantes');

const script=async()=>{
    const URI = 'mongodb://localhost:477/colegio';
	await mongoose.connect(URI);

    // Actualizar el dni del estudiante Lucas Blanco a 20355875
    const punto_a=await estudiantes.update({nombre:'Lucas',apellido:"Blanco"},{$set:{dni:'20355875'}})
    console.log({punto_a})

    // Agregar un campo 'ingreso' a todos los documentos con el valor false
    const punto_b=await estudiantes.update({},{$set:{ingreso:false}},{multi:true})
    console.log({punto_b})

    // Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A
    const punto_c=await estudiantes.updateMany({curso: '1A'},{$set:{ingreso:true}})
    console.log({punto_c})

    // Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de _id y __v
    const punto_d=await estudiantes.find({nota:{$gte:4}},{_id:0,__v:0})
    console.log({punto_d})

    // Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id y __v
    const punto_e=await estudiantes.find({ingreso:true},{_id:0,__v:0})
    console.log({punto_e})

    // Borrar de la colección de estudiantes los documentos cuyo campo 'ingreso' esté en true
    const punto_f=await estudiantes.deleteMany({ingreso:true})
    console.log({punto_f})

    // Mostar todos los id como fecha
    const punto_g=await estudiantes.aggregate([{
        $project:{
            _id: {
                $dateToString:{ format: "%Y-%m-%d %H:%M:%S:%MS",date:"$_id"}
            }
        }
    }])
    console.log({punto_g})


}
script()