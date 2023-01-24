import { useState, useEffect } from "react"
const List = ({getItems}) => {
    const [myItems, setmyItems] = useState()

    useEffect(() => {
        console.log("Buscando itens do DB...")

        setmyItems(getItems)
    }, [getItems])
  return (
    <div>
        {myItems && myItems.map((item) => (
            <p key={item}>{item}</p>
        ))}
    </div>
  )
}
export default List