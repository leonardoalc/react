// css
import "./Game.css"

// hooks
import { useRef } from "react"

const Game = ({ letters,  
  category, 
  guessedLetter, 
  setGuessedLetter, 
  verifyLetter,
  wrongLetters,
  rightLetters,
  chances,
  score
}) => {
  const letterInputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    verifyLetter(letters, guessedLetter, rightLetters, wrongLetters)

    letterInputRef.current.focus()
    setGuessedLetter("")
  }
  const handleId = () => {
    id += 1
    return id
  }
  let id = 0
  return (
    <div>
      <main className="game_main">
        <p className="pontuacao">Pontuação: {score}</p>
        <h1 className="title">Advinhe a palavra: </h1>
        <p>Dica: <span className="dica">{category}</span></p>
        <p>Você ainda tem <span className="span-tentativas">{chances}</span> tentativas</p>
        <div className="palavra-container">
          {letters.map((l, i) =>(
            <span className="bloco" key={i} id={handleId()}></span>
          ))}
        </div>
        <p>Tente advinhar uma letra da palavra:</p>
        <form className="form-game" onSubmit={handleSubmit}>
          <label>
            <input type="text" name="letter" maxLength="1" minLength="1" className="letra" onChange={(e) => setGuessedLetter(e.target.value)} value={guessedLetter || ""} ref={letterInputRef} required/>
          </label>
          <button type="submit">Jogar</button>
        </form>
        <div className="letras-erradas">
          <p>Letras já utilizadas: {wrongLetters.map((l, i) => <span key={i}>{l}, </span>)}</p>
          
        </div>
      </main>
    </div>
  )
}
export default Game