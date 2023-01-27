import { usePrevious } from "../hooks/usePrevius"
import { useState } from "react"

const HookCustom = () => {
    const [number, setnumber] = useState(0)
    const previousValue = usePrevious(number)
    
    const newNumber = () => {
        let n2 = Math.floor(Math.random() * 101)
        while(n2 === number) {
            n2 = Math.floor(Math.random() * 101)
            console.log("ocorreu")
        }
        setnumber(n2)
    }
  return (
    <div>
        <h2>HookCustom</h2>
        <p>Atual: {number}</p>
        <p>Anterior: {previousValue}</p>
        <button onClick={newNumber}>Alterar</button>
    </div>
  )
}
export default HookCustom