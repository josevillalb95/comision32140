// alumnos.js
const Router = require('koa-router')

// Prefix all routes with /alumnos
const router = new Router({
  prefix: '/alumnos',
})

const alumnos = [
  { dni: 33456789, nombre: 'Juan Perez', materia: 'Física', nota: 6 },
  { dni: 35457683, nombre: 'Celia Gómez', materia: 'Matemáticas', nota: 7 },
  { dni: 38683112, nombre: 'Cintia Fernández', materia: 'Física', nota: 4 },
  { dni: 34567209, nombre: 'Diego Mei', materia: 'Matemáticas', nota: 8 },
]

/* ---------------------- Routes ----------------------- */
/* API REST Get All */
router.get('/', ctx => {
  ctx.body = { alumnos }
})


router.get('/promedio', ctx => {
  const materia = ctx.request.query.materia

  //calculo de promedio por matera
  let suma = 0
  let cant = alumnos
    .filter(alumno => alumno.materia == materia)
    .map(alumno => (suma += alumno.nota)).length
  const promedio = suma / cant
  ctx.body = {
    promedio: cant
      ? promedio
      : `No hay alumnos en ${materia} para calcular el promedio`,
  }
})
/* API REST Get x dni */
router.get('/:dni', ctx => {
  const getCurrentalumno = alumnos.filter(alumno => {
    if (alumno.dni == ctx.params.dni) {
      return true
    }
  })

  if (getCurrentalumno.length) {
    ctx.body = getCurrentalumno[0]
  } else {
    ctx.response.status = 404
    ctx.body = {
      status: 'error!',
      message: 'alumno Not Found with that dni!',
    }
  }
})

/* API REST Post */
router.post('/new', ctx => {
  // Check if any of the data field not empty
  if (
    !ctx.request.body.dni ||
    !ctx.request.body.nombre ||
    !ctx.request.body.materia ||
    !ctx.request.body.nota
  ) {
    ctx.response.status = 400
    ctx.body = {
      status: 'error',
      message: 'Please enter the data',
    }
  } else {
    const newAlumno = {
      dni: ctx.request.body.dni,
      nombre: ctx.request.body.nombre,
      materia: ctx.request.body.materia,
      nota: ctx.request.body.nota,
    }
    alumnos.push(newAlumno)
    ctx.response.status = 201
    ctx.body = {
      status: 'success',
      message: `New alumno added with dni: ${ctx.request.body.dni} & nombre: ${ctx.request.body.nombre}`,
    }
  }
})

/* API REST Put */
router.put('/update/:dni', ctx => {
  // Check if any of the data field not empty
  if (
    !ctx.request.body.dni ||
    !ctx.request.body.nombre ||
    !ctx.request.body.materia ||
    !ctx.request.body.nota
  ) {
    ctx.response.status = 400
    ctx.body = {
      status: 'error',
      message: 'Please enter the data',
    }
  } else {
    const dni = ctx.params.dni
    const index = alumnos.findIndex(alumno => alumno.dni == dni)
    alumnos.splice(index, 1, ctx.request.body)
    ctx.response.status = 201
    ctx.body = {
      status: 'success',
      message: `New alumno updated with dni: ${ctx.request.body.dni} & nombre: ${ctx.request.body.nombre}`,
    }
  }
})

/* API REST Delete */
router.delete('/delete/:dni', ctx => {
  const dni = ctx.params.dni
  const index = alumnos.findIndex(alumno => alumno.dni == dni)
  alumnos.splice(index, 1)
  ctx.response.status = 200
  ctx.body = {
    status: 'success',
    message: `alumno deleted with dni: ${dni}`,
  }
})



module.exports = router
