const multer = require("multer")
const path = require("path")

// destination to store image
const imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        let folder = ""

        if (req.baseUrl.includes("users")) {
            folder = "users"

        } else if (req.baseUrl.includes("photos")) {
            folder = "photos"
        }

        // null está dizendo que não há erros e o segundo parâmetro é uma string com o folder de envio
        cb(null, `uploads/${folder}`)
    },
    filename: (req, file, cb) => {

        // aqui está sendo criada um nome para o arquivo com a data, porém, em casos de
        // sistemas maiores e mais complexos, utilize a biblioteca uid + extenção do arquivo.
        cb(null, Date.now() + path.extname(file.originalname)) //

    }
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error("Por favor, envie apenas PNG ou JPG"))
        }
        cb(undefined, true)
    }
})

module.exports = {imageUpload}