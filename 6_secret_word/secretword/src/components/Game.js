// css
import "./Game.css"

// hooks
import { useState } from "react"

const Game = ({ letters, word, category }) => {
  const [pts, setpts] = useState(0)
  let cont = 0
  return (
    <div>
      <main className="game_main">
        <p className="pontuacao">Pontuação: {pts}</p>
        <h1 className="title">Advinhe a palavra: </h1>
        <p>Dica: <span className="dica">{category}</span></p>
        <div className="palavra-container">
          {letters.map((l) =>(
            <span className="bloco revelado" id={l} key={l.index}></span>
          ))}
        </div>
        <p>Tente advinhar uma letra da palavra:</p>
        <form className="form-game">
          <label>
            <input type="" maxLength="1" minLength="1" className="letra"/>
          </label>
          <button type="submit">Jogar</button>
        </form>
      </main>
    </div>
  )
}
export default Game