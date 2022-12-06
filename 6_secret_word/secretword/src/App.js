// Css
import './App.css';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import End from './components/End';

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
  const [guessedLetter, setguessedLetter] = useState()

    const words = wordsList

  // Game Variables
  const [pickedCategory, setpickedCategory] = useState("")
  const [Letters, setLetters] = useState([])

  const [rightLetters, setrightLetters] = useState([])
  const [wrongLetters, setwrongLetters] = useState([])
  const [chances, setchances] = useState(5)
  const [score, setscore] = useState(0)

  // Game functions
  const pickWordAndCategory = useCallback(() => {
    // picking a category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]
    
    // picking a word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    return {word, category}
  }, [words])

  const transformWordtoLetter = (word) => {
    const wordlower = word.toLowerCase()
    const lettersSplit = wordlower.split("")
    
    return lettersSplit
  }

  const verifyLetter = (letters, guessedLetter, rightLetters, wrongLetters) => {
    let contLetter = 1

    const normalizedLetter = guessedLetter.toLowerCase()
    // checanndo se a letra já foi utilizada
    if (wrongLetters.includes(normalizedLetter) || rightLetters.includes(normalizedLetter) || isNaN(normalizedLetter) === false) {
      return;
    }

    letters.forEach((e) => {
      if (normalizedLetter === e) {
        const elemento = document.getElementById(contLetter)
        elemento.innerHTML = normalizedLetter
      }
    contLetter++
    }
    )
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

      setchances((actualChances) => actualChances - 1)
    }
  }

  // Stage functions 
  const startGame = useCallback(() => {
    const {word, category} = pickWordAndCategory()
    const letters = transformWordtoLetter(word)


    clearLetterStates()
    setpickedCategory(category)
    setLetters(letters)
    setchances(5)
    setgameStage(stages[1].name)
  }, [pickWordAndCategory])

  // reset game
  const clearLetterStates = () => {
    setrightLetters([])
    setwrongLetters([])
  }

  useEffect(() => {
    if (chances <= 0) {
      // reset all states
      clearLetterStates()

      setgameStage(stages[2].name)
    }
  }, [chances])

  const retry = () => {
    setscore(0)
    setchances(5)
    setgameStage(stages[0].name)
  }

  // win condition
  useEffect(() => {

  const uniqueLetters = [...new Set(Letters)]
    if (rightLetters.length !== 0) {
      if (rightLetters.length === uniqueLetters.length) {
        setscore((actualScore) => actualScore + 100)
        // removing letters from white space
        for (let id = 1; id <= Letters.length; id++) {
          const elemento = document.getElementById(id)
          elemento.innerHTML = ""
        }

        startGame()
      }
    }
  }, [rightLetters, Letters, startGame])

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
      {gameStage === "end" && <End
      retry={retry}
      score={score}
      />}
    </div>
  );
}

export default App;
