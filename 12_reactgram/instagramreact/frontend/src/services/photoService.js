import { api, requestConfig } from "../utils/config";

// publish a user photo
const publishPhoto = async (data, token) => {
    const config = requestConfig("POST", data, token, true)

    try {
        const res = await fetch(api + "/photos", config)
    } catch (error) {
        console.log(error)
    }
}

const photoService = {}

export default photoService