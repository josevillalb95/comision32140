import { createTransport } from 'nodemailer'
import {config} from './config.js'


const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: config.user,
    pass: config.password
  },
})

const email = {
  from: 'Servidor Node.js',
  to: config.user,
  subject: 'Mail de prueba desde Node.js',
  html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
}

try {
  const info = await transporter.sendMail(email)
  console.log(info)
} catch (error) {
  console.log(error)
}
