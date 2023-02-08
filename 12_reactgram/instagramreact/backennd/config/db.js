const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

mongoose.set("strictQuery", true)

const conn = async () => {
    try {
        const dbconn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.dxczhni.mongodb.net/?retryWrites=true&w=majority`)

        console.log("Conectou ao banco")

        return dbconn
    } catch(err) {
        console.log(err)
    }
}
// lembre-se sempre de executar a conexeção.
conn()

module.exports = conn