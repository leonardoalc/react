//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"

//4 refatorando em hook
import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {
  const { counter } = useCounterContext()
  return (
    <div>
        <h1>About</h1>
        <p>Counter value: {counter}</p>
    </div>
  )
}
export default About 