import { useLayoutEffect, useEffect, useState } from "react"

const HookUseLayoutEffect = () => {
    const [name, setname] = useState("Algum nome")
    
    useEffect(() => {
    
        console.log("2")
        setname("Mudou de novo")

    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setname("Outro nome")
    }, []) 

    // UseLayoutEffect estará sendo executado primeiro, independente da ordem.

    console.log(name)
  return (
    <div>
        <h2>HookUseLayoutEffect</h2>

    </div>
  )
}
export default HookUseLayoutEffect