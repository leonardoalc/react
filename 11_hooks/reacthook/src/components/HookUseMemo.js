import { useMemo, useState, useEffect } from "react"

const HookUseMemo = () => {
    const [number, setnumber] = useState(0)
    
    // exemplo que gera erro: const premiumNumbers = ["0", "100", "200"]

    const premiumNumbers = useMemo(() => {return ["0", "100", "200"]}, [])
    // premium numbers 
    useEffect(() => {
        console.log("Premium numbers foi alterado")
    }, [premiumNumbers]) // esse useeffect não é ativado novamente pois a variavel não está sendo renderizada dnv

  return (
    <div>
        <h2>HookUseMemo</h2>
        <input type="text" onChange={(e) => setnumber(e.target.value)} />
        {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""}
    </div>
  )
}
export default HookUseMemo