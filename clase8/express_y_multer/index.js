const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on("error", err => console.log(`Error: ${err}`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/uploads'));

const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`
        cb(null, filename);
    }
})

const upload = multer({ storage: myStorage })
// version simple const upload = multer({ dest: 'uploads/' })

app.post('/uploadfile', upload.single('myFile'), (req, res) => {
    // req.file me lo da como resultado la subida con multer
    const file = req.file;
    console.log(file);
    if (!file) {
        return res.status(400).send('Error subiendo el archivo');
    }
    res.status(200).json({
        status:'Archivo subido correctamente! ',
        link:__dirname + '/uploads/'+ file.filename
    });
})