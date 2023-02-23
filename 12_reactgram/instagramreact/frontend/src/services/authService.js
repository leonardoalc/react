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

// sign in an user 
const login = async (data) => {
    const config = requestConfig("POST", data)

    try {
        const res = await fetch(api + "/users/login", config)
            .then((res) => res.json())
            .catch((err) => err)

        // caso o res possua id, ele irá salvar o usuário com id e token no local storage
        // isso é preciso pois caso possua um erro, ele também irá salvar no local storage,
        // assim, o erro é previnido com essa condicional.
        if (res._id) {
            localStorage.setItem("user", JSON.stringify(res))
        }

        return res
    } catch (error) {
        console.log(error);
    }
}

const authService = {
    register,
    logout,
    login
}

export default authService