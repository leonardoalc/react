export const api = "http://localhost:5000/api"
export const uploads = "http://localhost:5000/uploads"

export const requestConfig = (method, data, token = null, image = null) => {

    // image será utilizado como um booleano, avisando quando podemos ter 
    // imagens na requisição.

    let config

    if (image) {
        config = {
            method,
            body: data,
            headers: {},
        }
    } else if (method === "DELETE" || data === null) {

        config = {
            method,
            headers: {},
        }

    } else {
        config= {
            method,
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        }
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}