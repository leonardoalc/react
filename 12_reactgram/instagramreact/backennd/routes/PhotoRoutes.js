const express = require("express")
const router = express.Router()

// controller
const {insertPhoto, deletePhoto} = require("../controllers/PhotoController")

// middlewares
const {photoInsertValidation} = require("../middlewares/photoValidation")
const authGuard = require("../middlewares/authGuard")
const { imageUpload } = require("../middlewares/imageUpload")

const { validate } = require("../models/User")

// routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)

module.exports = router