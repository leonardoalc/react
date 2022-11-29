// Css
import './App.css';

// Components
import StartScreen from './components/StartScreen';


// react
import {useCallback, useState, useEffect} from "react"

// data
import {wordsList} from "./data/words"

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]
function App() {
  const [gameStage, setgameStage] = useState(stages[0].name)
  const [words, setwords] = useState(wordsList)
  console.log(words)
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen/>}
      {gameStage === "game" && <StartScreen/>}
      {gameStage === "end" && <StartScreen/>}
    </div>
  );
}

export default App;
