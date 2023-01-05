//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"

//4 refatorando em hook
import { useCounterContext } from "../hooks/useCounterContext"

//6 alterando contexto complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const About = () => {
  const { counter } = useCounterContext()
  const { color, dispatch } = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({type: color})
  } 
  return (
    <div>
        <h1 style={{color: color}}>About</h1>
        <p>Counter value: {counter}</p>
        <button  onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() =>  setTitleColor("PURPLE")}>Roxo</button>
    </div>
  )
}
export default About 