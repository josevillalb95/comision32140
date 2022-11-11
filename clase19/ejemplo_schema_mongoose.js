const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const userSchema=new Schema({
    userName:{
        type:String,
        // unique:true,
        unique:[true,"Ya existe un user con este nombre"],
        require: [true,"Es necesario un username"],
        trim: true, //BORRA ESPACIOS EN BLANCO DE LOS EXTREMO
        index: true, // CREA UN INDICE PARA QUE LA BUSQUEDA SEA MAS RAPIDA ( NO ABUSAR USARLO EN CASOS PUTNUALES )
        validator:{
            validator: (val) => validator.isAlpha(val, ["en-ES"], { ignore: " " }),
            message:'Debe contener solo caracteres de A-Z"'
        }
    },
    password:{
        type:String,
        maxlength: [40, "Debe contener como maximo 40 caracteres"],
        minlength: [10, "Debe contener como minimo 10 caracteres"],
        require: [true,"Es necesario un password"],
    }
})

// ANTES DE GUARDAR CAMBIO EL PASSWORD QUE ME MANDARON POR UN EL MISMO 
// PERO ENCRIPTADO 
userSchema.pre('save', function(next) {
    if (this.password) {
        //bcrypt ES UN MODULO EXTERNO QUE SIRVE PARA ENCRIPTAR
        const hash = await bcrypt.hash(this.password, 'coderhouser32140');
        this.password = hash;
    }
    next();
});

const User=mongoose.model("User",userSchema);
module.exports=User;
