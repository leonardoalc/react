import { useState } from "react"
import ShowUserName from "./ShowUserName"

const ConditionalRender = () => {
    const [x, setX] = useState(true)
    let [name, setName] = useState("Isabel")
    const mudarNome = () => {
        if (name === "Isabel") {
            name = setName("Leonardo")
        } else {
            name = setName("Isabel") 
        }
    }
    return (
        <div>
            <div>
                <h1>Isso será exibido?</h1>
                {x && <p>Se x for True, aparece isso!</p>}
                {!x && <p>Se x for False, aparece isso aqui!</p>}
                <button onClick={() => setX(false)}>False</button>
                <button onClick={() => setX(true)}>True</button>
            </div>
            <div>
                {name === "Isabel" ? ( //If
                    <p>O nome é {name}!</p>
                ) : ( //Else
                    <p>O nome não é Isabel, é {name}!</p>
                )}
                <button onClick={mudarNome}>Mudar o nome</button>
            </div>
            <div>
                <ShowUserName name={name}/>
            </div>
        </div>
    )
}
export default ConditionalRender