// CSS
import "./End.css"

const End = ({ retry, score }) => {
  return (
    <div>
        <h1 className="end-h1">Game Over</h1>
        <h2>A sua pontuação foi: <span className="score-span">{score}</span></h2>
        <p className="reset-p">Clique para reiniciar o jogo</p>
        <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}
export default End