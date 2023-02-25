'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const PalabraController = use('App/Controllers/Http/PalabraController')
Route.on('/').render('welcome')
Route
.get('/sin-controller', async ({request,view}) => {
    const {palabras} = request.qs
    console.log('Sin controller:', palabras)
    let arrayPalabras = palabras.split(' ')
    let arrayPalabrasInvertidas = [...arrayPalabras].reverse()
    return view.render('Palabras', {titulo: 'Sin controller', arrayPalabras, arrayPalabrasInvertidas})
})

Route.get('/con-controller', 'PalabraController.index')