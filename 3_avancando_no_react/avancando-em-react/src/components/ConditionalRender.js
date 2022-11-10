import { useState } from "react"


const ConditionalRender = () => {
    const [x, setX] = useState(true)

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for True, aparece isso!</p>}
            {!x && <p>Se x for False, aparece isso aqui!</p>}
            <button onClick={() => setX(false)}>False</button>
            <button onClick={() => setX(true)}>True</button>
        </div>
    )
}
export default ConditionalRender