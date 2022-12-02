// css
import "./Game.css"

// hooks
import { useState } from "react"

const Game = ({ letters, word, category }) => {
  const [pts, setpts] = useState(0)
  return (
    <div>
      <main className="game_main">
        <p className="pontuacao">Pontuação: {pts}</p>
        <h1 className="title">Advinhe a palavra: </h1>
        <p>Dica: <span className="dica">{category}</span></p>
        <div className="palavra-container">
          
        </div>
      </main>
    </div>
  )
}
export default Game