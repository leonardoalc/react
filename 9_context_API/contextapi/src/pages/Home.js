//import { useContext } from "react"
//import {CounterContext} from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter"

//  4 refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

//5 context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
  const { counter } = useCounterContext()

  
  const { color, dispatch } = useTitleColorContext()

  //6 alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  return (
    <div>
        <h1 style={{ color: color }}>Home</h1>

        <p>Valor do contexto: {counter}</p>
        {/*3 alterando valor do contexto */}
        <ChangeCounter/>
        { /*6 alterando contexto */}
        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
          <button onClick={() =>  setTitleColor("PURPLE")}>Roxo</button>
        </div>
    </div>
  )
}
export default Home