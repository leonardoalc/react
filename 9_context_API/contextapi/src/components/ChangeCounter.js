import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const ChangeCounter = () => {
    const { counter, setcounter } = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => setcounter(counter + 1)}>Add value</button>
        </div>
    )
}
export default ChangeCounter