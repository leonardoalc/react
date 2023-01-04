// 1 - criar contexto
import { createContext, useState } from "react"

export const CounterContext = createContext()

export const CounterContextProvider = ({ children }) => {
    const [counter, setcounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setcounter}}>
            {children}
        </CounterContext.Provider>
    )
}