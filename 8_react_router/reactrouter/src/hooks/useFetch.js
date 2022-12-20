import { useState, useEffect } from "react";

// 4 custom hook

export const useFetch = (url) => {
    const [data, setdata] = useState(null)

    //5 refatorando o post
    const [config, setconfig] = useState(null)
    const [method, setmethod] = useState(null)
    const [callFetch, setcallFetch] = useState(false)

    //6 loading
    const [loading, setloading] = useState(false)

    //7 tratando erros
    const [error, seterror] = useState(null)

    //8 
    const [itemId, setitemId] = useState(null)
    const httpsConfig = (data, method) => {
        if (method === "POST") {
            setconfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            }) 
            
            setmethod(method)
        } else if (method === "DELETE") {
            setconfig({
                method,
                headers: {"Content-type": "application/json"}
            })  
            setmethod("DELETE")
            setitemId(data)
        }
    }

    useEffect(() => {

        const fetchData = async () => {

            //6 loading
            setloading(true)

            try {
                const res = await fetch(url)

                const json = await res.json()

                setdata(json)
            } catch (error) {
                console.log(error.message)
                seterror("Houve algum erro ao carregar os dados")
            }

            setloading(false)
        }

        fetchData()
    }, [url, callFetch])

    //5 refatorando post
    useEffect(() => {
        const httpRequest = async () => {

            let json

            try {
                if (method === "POST") {
                    let fetchOptions = [url, config]
        
                    const res = await fetch(...fetchOptions)
                    json = await res.json()

                    setcallFetch(json)
                } else if (method === "DELETE") {
                    const deleteURL = `${url}/${itemId}`

                    const res = await fetch(deleteURL, config)

                    json = await res.json()

                    setcallFetch(json)
                }
            } catch (error) {
                console.log(error.message)
            }
        }

        httpRequest()
    }, [config, method, url])
    
    return { data, httpsConfig, loading, error }
}