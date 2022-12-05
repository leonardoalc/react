// css
import "./Game.css"

// hooks
import { useState } from "react"

const Game = ({ letters,  
  category, 
  guessedLetter, 
  setGuessedLetter, 
  verifyLetter,
  wrongLetters,
  rightLetters
}) => {
  const [pts, setpts] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    verifyLetter(letters, guessedLetter, rightLetters, wrongLetters)
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
            <span className="bloco" key={cont} id={handleCont()}></span>
          ))}
        </div>
        <p>Tente advinhar uma letra da palavra:</p>
        <form className="form-game" onSubmit={handleSubmit}>
          <label>
            <input type="" maxLength="1" minLength="1" className="letra" onChange={(e) => setGuessedLetter(e.target.value)} required/>
          </label>
          <button type="submit">Jogar</button>
        </form>
        <div className="letras-erradas">
          <p>Letras já utilizadas:</p>
          
        </div>
      </main>
    </div>
  )
}
export default Game