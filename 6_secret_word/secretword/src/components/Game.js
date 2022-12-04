// css
import "./Game.css"

// hooks
import { useState } from "react"

const Game = ({ letters, word, category, guessedLetter, setGuessedLetter, verifyLetter }) => {
  const [pts, setpts] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    verifyLetter(letters, guessedLetter)
  }
  const handleCont = () => {
    cont += 1
    return cont
  }
  let cont = 0
  return (
    <div>
      <main className="game_main">
        <p className="pontuacao">Pontuação: {pts}</p>
        <h1 className="title">Advinhe a palavra: </h1>
        <p>Dica: <span className="dica">{category}</span></p>
        <div className="palavra-container">
          {letters.map((l) =>(
            <span className="bloco" id={handleCont()} key={cont}></span>
          ))}
        </div>
        <p>Tente advinhar uma letra da palavra:</p>
        <form className="form-game" onSubmit={handleSubmit}>
          <label>
            <input type="" maxLength="1" minLength="1" className="letra" onChange={(e) => setGuessedLetter(e.target.value)} required/>
          </label>
          <button type="submit">Jogar</button>
        </form>
      </main>
    </div>
  )
}
export default Game