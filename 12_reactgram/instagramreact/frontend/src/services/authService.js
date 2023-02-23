import {api, requestConfig} from "../utils/config"

// register an user 
const register = async (data) => {
    const config = requestConfig("POST", data)

    try {
        const res = await fetch(api + "/users/register", config)
            .then(res => res.json())
            .catch(err => err)
        // a resposta recebida será o token
        if (res) {
            localStorage.setItem("user", JSON.stringify(res))
        }

        return res
    } catch (error) {
        console.log(error)
    }
}
// logout
const logout = () => {
    localStorage.removeItem("user")
}

const authService = {
    register,
    logout
}

export default authService