import styles from "./SearchForm.module.css"

import { FaSearch } from "react-icons/fa"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
    const [query, setquery] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) =>  {
        e.preventDefault()

        if(query) {
            return navigate(`/search?q=${query}`)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Busque por tags..." className={styles.search_input} onChange={e => setquery(e.target.value)} value={query}/>
        <button className={styles.search_button}><FaSearch/></button>
    </form>
  )
}
export default SearchForm