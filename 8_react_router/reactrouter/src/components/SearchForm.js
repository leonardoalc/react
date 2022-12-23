import { useNavigate } from "react-router-dom"

import { useState } from "react"

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setquery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate("/search?q=" + query)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setquery(e.target.value)}/>       
        <button type="submit">Buscar</button>
    </form>
  )
}
export default SearchForm