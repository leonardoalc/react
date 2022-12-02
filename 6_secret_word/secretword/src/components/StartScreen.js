// css component
import "./StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div>
        <h1 className="h1_start">Secret Word</h1>
        <p className="p_start">Clique para começar a jogar!</p>
        <button onClick={startGame}>Jogar</button>
    </div>
  )
}
export default StartScreen