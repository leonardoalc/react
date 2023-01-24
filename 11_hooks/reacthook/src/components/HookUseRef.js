import { useEffect, useState, useRef } from "react"


const HookUseRef = () => {
    const numberRef = useRef(0)
    const [counter, setcounter] = useState(0)
    const [counterB, setcounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    // 2 useref dom
    const inputRef = useRef()
    const [text, settext] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        settext("")

        inputRef.current.focus()
    }
  return (
    <div>
        <h2>UseRef</h2>
        <p>O componente renderizou {numberRef.current} vezes</p>
        <p>Counter A: {counter}</p>
        <button onClick={() => setcounter(counter+1)}>Contador A</button>
        <p>Counter B: {counterB}</p>
        <button onClick={() => setcounterB(counterB+1)}>Contador B</button>
        {/*2 useref dom */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={e => settext(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
export default HookUseRef