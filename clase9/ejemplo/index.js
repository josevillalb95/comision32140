const express = require('express');
const { create } = require('express-handlebars');

const app = express();
const port = 3000;

// ENCARPETADO POR DEFAULT
// (CARPETA)VIEWS
// ..... (CARPETA)LAYOUTS (CARPETA QUE CONTIENE EL MODELO)
// ........... (ARCHIVO)MAIN.HANDLEBARS
//...... (CARPETA)PARTIALS (CARPETA QUE CONTIENE COMPONENTES ADICIONALES)
// ........... (ARCHIVO)PARTIALS1.HANDLEBARS  
// ........... (ARCHIVO)PARTIALS1.HANDLEBARS  
// ..... (ARCHIVO)VIEW1.HANDLEBARS  (COMPONENTES ENVIADOS DESDE LA RUTA)
// ..... (ARCHIVO)VIEW2.HANDLEBARS  
// ..... (ARCHIVO)VIEW3.HANDLEBARS  


// EN SINTAXIS DEFAUTL
// .
// └── LAYOUT
//     ├─── CODIGO HANDLEBARS HEADER
//     ├─── PARTIAL MENU
//     |   └── CODIGO HANDLEBARS
//     ├── BODY DEL LAYOUT
//     |   └── VIEW INICIO
//     |       ├─── CODIGO HANDLEBARS
//     |       ├─── PARTIAL 
//     |       |    └── CODIGO HANDLEBARS
//     |       └─ CODIGO HANDLEBARS
//     └─── PARTIAL FOOTER
//          └── CODIGO HANDLEBARS


// configuramos handlebars
const hbs = create({
    helpers: {
        estadoSuscripcion(fecha){
            const ahora=new Date().getTime();
            const fechaSuscripcion=new Date(fecha).getTime();
            let diferenciaDias =  fechaSuscripcion - ahora  
            diferenciaDias = diferenciaDias / (1000*60*60*24);
            if(diferenciaDias > 0 )
                return 'Te quedan '+parseInt(diferenciaDias)+' dias'
            return 'Plan vencido'
        },
        debug(algo){
            console.log(algo)
        },
        debo(facturas){
            let monto=0
            if(facturas && facturas.length)
            facturas.forEach(element => {
                if(element.pagado==false)
                    monto+=element.monto
            });
            if(!monto)
                return "Estas al dia"
            return "Debes $"+monto
        }
    }
 });
//  aca le decimos que usamos handlebars como motor de plantilla
app.engine('handlebars', hbs.engine);

// establecemos el motor de plantillas que vamos a usar 
app.set('view engine', 'handlebars');

// establecemos el directorio donde estan nuestra plantillas 
app.set('views', './views');

// establecemos la carpeta donde estan nuestro achivos publicos
app.use(express.static('public'))

app.get('/', (req, res, next) => {
    const valores={
        nombre:'jose villalba',
        cumple:'4 julio',
        genero:'Masculino',
        mail:'jose@gmail.com',
        contra:'asd123'

    }
    res.render('view/home',valores);
});

app.get('/pago', (req, res, next) => {
    const valores={
        tarjeta:'12321-41234123-2134',
        direccion:'avenida siempre viva 123',
        codigo:7900,
        cvv:233,
        facturas:{
            proximas:{
                periodo10:'octubre',
                periodo11:'noviembre',
                periodo12:'diciembre'
            },
            recibos:[
                {
                    periodo:'1/5',
                    pagado:true,
                    monto:2500
                },
                {
                    periodo:'1/6',
                    pagado:false,
                    monto:2600
                },
                {
                    periodo:'1/7',
                    pagado:true,
                    monto:2650
                },
                {
                    periodo:'1/8',
                    pagado:false,
                    monto:2650
                }
            
            ]
        }
           
    }
    res.render('view/pago',valores);
});

app.get('/suscripcion', (req, res, next) => {
    const valores={
        fecha:'12-04-2022',
        precioSig:'2900',
        plan:'full 4k',
        adicionales:'-',
        precio:'2400',
    }
    res.render('view/suscripcion',valores);
});

app.listen(port, () => {
    console.log(`Server listeting on port ${port}`)
});