// Css
import './App.css';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';

// react
import {useCallback, useState, useEffect } from "react"

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
  const [guessedLetter, setguessedLetter] = useState()


  // Game Variables
  const [pickedCategory, setpickedCategory] = useState("")
  const [pickedWord, setpickedWord] = useState("")
  const [Letters, setLetters] = useState([])

  const [rightLetters, setrightLetters] = useState([])
  const [wrongLetters, setwrongLetters] = useState([])
  const [chances, setchances] = useState(5)
  const [score, setscore] = useState(0)
  

  // Game functions
  const pickWordAndCategory = () => {
    // picking a category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]
    
    // picking a word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    return {word, category}
  }
  const transformWordtoLetter = (word) => {
    const wordlower = word.toLowerCase()
    const lettersSplit = wordlower.split("")
    
    return lettersSplit
  }
  const verifyLetter = (letters, guessedLetter, rightLetters, wrongLetters) => {
    let contLetter = 1
    let igual = false

    const normalizedLetter = guessedLetter.toLowerCase()
    // checanndo se a letra já foi utilizada
    if (wrongLetters.includes(normalizedLetter) || rightLetters.includes(normalizedLetter)) {
      return;
    }

    letters.map((e) =>{
      if (normalizedLetter === e) {
        const elemento = document.getElementById(contLetter)
        elemento.innerHTML = normalizedLetter
        igual = true
      }
    contLetter++
    })
    // adicionando em wrongLetters ou rightLetters
    if(letters.includes(normalizedLetter)) {
      setrightLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setwrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
    }
  }

  // Stage functions 
  const startGame = () => {
    const {word, category} = pickWordAndCategory()
    const letters = transformWordtoLetter(word)

    setpickedCategory(category)
    setLetters(letters)
    setpickedWord(word)
    
    setgameStage(stages[1].name)
  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game 
      letters={Letters}
      category={pickedCategory}
      guessedLetter={guessedLetter}
      setGuessedLetter={setguessedLetter}
      verifyLetter={verifyLetter}
      wrongLetters={wrongLetters}
      rightLetters={rightLetters}
      chances={chances}
      score={score}
      />}
      {gameStage === "end" && <StartScreen/>}
    </div>
  );
}

export default App;
