import { createTransport } from 'nodemailer'
import { config } from './config.js'
const TEST_MAIL = config.user

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: config.user,
    pass:config.password
  },
})
const token="asdfasdfn2231sadasd2"
const mailOptions = {
  from: "Servidor Node.js con img",
  to: TEST_MAIL,
  subject: "Mail de prueba desde Node.js",
  html: `<h1 style="color: blue;">Contenido de prueba con archivo adjunto desde <span style="color: green;">Node.js con Nodemailer</span></h1>`,
  attachments: [
    {
      path: "nodemailer.png",
    },
  ],
};

try {
  const info = await transporter.sendMail(mailOptions)
  console.log(info)
} catch (error) {
  console.log(error)
}
