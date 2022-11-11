const mongoose = require('mongoose');
const { estudiantes } = require('./models/estudiantes.js');

const script=async()=>{
    const URI = 'mongodb://localhost:477/colegio';
	await mongoose.connect(URI);


    // Los estudiantes ordenados por orden alfabético según sus nombres.
    const punto_a=await estudiantes.find({}).sort({nombre:-1})
    console.log('punto a',punto_a)
    console.log('---------------------------')
    // El estudiante más joven
    const punto_b=await estudiantes.find({}).sort({edad:1}).limit(1)
    console.log('punto b',punto_b)
    console.log('---------------------------')
    // Los estudiantes que pertenezcan al curso '2A'
    const punto_c=await estudiantes.find({curso: '2A'})
    console.log('punto c',punto_c)
    console.log('---------------------------')
    // El segundo estudiante más joven.
    const punto_d=await estudiantes.find({}).sort({edad:1}).limit(1).skip(1)
    console.log('punto d',punto_d)
    console.log('---------------------------')

    // ordenados por apellido descendente (z a a)
    const punto_e=await estudiantes.find({},{nombre:1,apellido:1,_id:0,curso:1}).sort({apellido:1})
    console.log('punto e',punto_e)

    console.log('---------------------------')
    // Los estudiantes que sacaron 10
    const punto_f=await estudiantes.find({nota: 10})
    console.log('punto f',punto_f)

    console.log('---------------------------')
    // El promedio de notas del total de alumnos
    const punto_g=await estudiantes.find({})
    const suma_g=punto_g.reduce( (a,b) => { return (a) + (b.nota) },0 )
    console.log('punto g',suma_g /punto_g.length )
    // segunda forma
    console.log('------')
    const agregate_punto_g=await estudiantes.aggregate([ 
        {
            $group :{
                _id:null,
                pop: { $avg : "$nota"}
            }
        }
    ])
    console.log('punto g',agregate_punto_g )

    console.log('---------------------------')
    // El promedio de notas del curso '1A'.
    const agregate_punto_f=await estudiantes.aggregate([{
        $group :{
            _id:'$curso',
            pop: { $avg : "$nota"}
        }
    }])
    console.log('punto f',agregate_punto_f )





}

script()