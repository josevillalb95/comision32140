// mongoose / no relacional ( noSql )
// alumno Coder 
{
    nombre:String,
    apellido:String,
    comision:{
        id:String,
        profe:{
            nombre:String,
            apellido:String, 
        },
        fecha_incio:Date
        fecha_fin:Date
    },
    coderBeca:Boolean,
}

// slq, postgress, mariadb /  relacional
// user Coder 
// user Coder 
// usuario =
// {
//     id:sting, ( claves primarias, secundarias)
//     nombre:String,
//     apellido:String,
// }
// comision={
//     id:String,
//     fecha_incio:Date
//     fecha_fin:Date
//     profe:usuario
// },
// alumno {
//     usaurio
//     coderBeca:Boolean,
//     comision:string / id que une con la tablaa comision
// }


user=
{    
    usuario:'lautaro'
    apellido:'tallarico'
    comision:32140
    id:4
}

comision {
    id:32140,
    fecha_incio:'8/9/2022'
    fecha_fin:'8/2/2023'
    profe:'1233'
}
