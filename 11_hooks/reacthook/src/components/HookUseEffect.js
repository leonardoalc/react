import { useEffect, useState } from "react"

const HookUseEffect = () => {
    // 1 - useEffect, sem dependências
    useEffect(() => {
        console.log("Estou sendo executado")
    })

    const [number, setnumber] = useState(1)


    // 2 array de deps. vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez")
    }, [])
    const changeSomething = () => setnumber(number + 1)

    // 3 item no array de dps.
    const [anotherNumber, setanotherNumber] = useState(null)

    useEffect(() => {
        if(!anotherNumber) {
            return () => setanotherNumber(anotherNumber+1)
        }
        console.log("serei executado toda vez que o anotherNumber for renderizado.")
    }, [anotherNumber])

    // 4 cleanup useeffect
    useEffect(() => {

        const timer = setTimeout(() => {
            console.log("Hello World")

            // setanotherNumber(anotherNumber+1)
        }, 2000);

        return () => clearTimeout(timer)
    }, [anotherNumber])
  return (
    <div>
        <h2>UseEffect</h2>
        <p>number: {number}</p>
        <button onClick={changeSomething}>Mudar número</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setanotherNumber(anotherNumber+1)}>Mudar anotherNumber</button>
    </div>
  )
}
export default HookUseEffect