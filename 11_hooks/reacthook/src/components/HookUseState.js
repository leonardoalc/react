// hook
import { useState } from 'react';

const HookUseState = () => {
  // 1 - useState
  let userName = "João"

  const [name, setname] = useState("Maria")

  const changeNames = () => {
    if (userName !== "João") {
      userName = "João"
    } else {
      userName = "Leonardo"
    }
    if (name === "Maria") {
      setname("Isabel")
    } else {
      setname("Maria")
    }

    console.log(`userName: ${userName}`)
    console.log(`useState: ${name}`)
  }

  // 2 - useState e input
  const [age, setage] = useState(19)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(age)
  }
  return (
    <div>
      {/*1 - usestate */}
      <h2>UseState</h2>
      <p>Variável: {userName}</p>
      <p>UseState: {name}</p>
      <button onClick={changeNames}>Trocar nomes</button>
      <form onSubmit={handleSubmit}>
        <p>Digite a sua idade</p>
        <input type="number" value={age} onChange={(e) => setage(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
      <p>Você tem {age} anos!</p>
    </div>
  )
}
export default HookUseState