const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const conn = async () => {
    try {
        const dbconn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.dxczhni.mongodb.net/?retryWrites=true&w=majority`)

        return dbconn
    } catch(err) {
        console.log(err)
    }

    console.log("Conectou ao banco")
}

module.exports = conn