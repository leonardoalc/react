const {body} = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome é obrigatório.")
            .isLength({min: 3})
            .withMessage("O nome precisa ter no mínimo 3 caracteres."),
        body("email")
            .isString()
            .withMessage("O e-mail é obrigatório.")
            .isEmail()
            .withMessage("Insira um email válido."),
        body("password")
            .isString("")
            .withMessage("A senha é obrigatória.")
            .isLength({min: 5})
            .withMessage("A senha precisa ter no mínimo 3 caracteres."),
        body("confirmpassword")
            .isString()
            .withMessage("Confirme sua senha.")
            .custom((value, {req}) => {
                if (value != req.body.password) {
                    throw new Error("As senhas precisam ser iguais.")
                }
                return true
            })
]
}

module.exports = {
    userCreateValidation,
}