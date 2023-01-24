import { useCallback, useState } from "react"

import List from "./List"

const HookUseCallback = () => {

  const [counter, setcounter] = useState(0)

  const getItemsFromDataBase = useCallback(() => {
      return ["a", "b", "c", "d"]
  }, [])
  return (
    <div>
        <h2>UseCallback</h2>
        <List getItems={getItemsFromDataBase}/>
        <button onClick={() => setcounter(counter+1)}>Alterar!!</button>
        <p>{counter}</p>
    </div>
  )
}
export default HookUseCallback