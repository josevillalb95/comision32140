
// =======
// SI DENTOR DE LA CARPETA PUBLIC TENEMOS 
 
// PUBLIC
//       CSS
//          STYLE.CSS
//       IMG
//          MEME.JPEG
//     JS
//          FUNCTION.JS

// CREO UNA APP NORMAL CON EXPRESS
const express = require('express')
const app = express()
// NUESTRO PATH ABSOLUTO SERIA TEORIA_STATIC
const pathAbsoluto=__dirname 
// DECLARO LA CARPETA PUBI
app.use(express.static(pathAbsoluto+'/public'));
app.listen(3000)

// DESDE MI NAVEGADOR VOY A PODER ACCEDER A:
// http://localhost:3000/css/style.css
// http://localhost:3000/js/function.js
// http://localhost:3000/img/meme.jpeg
     


////OTRA APP

// CONFIGURANDO UN PREFIJO VIRTUAL
const express = require('express')
const app = express()
// NUESTRO PATH ABSOLUTO SERIA TEORIA_STATIC
const pathAbsoluto=__dirname 

// ACA IDENTIFICO EL PREFIJO
app.use('/static/v1', express.static(pathAbsoluto+'/public'));
app.listen(3000)
// DESDE MI NAVEGADOR VOY A PODER ACCEDER A:
// http://localhost:3000/static/v1/css/style.css
// http://localhost:3000/static/v1/js/function.js
// http://localhost:3000/static/v1/images/meme1.png
         
