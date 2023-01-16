import styles from "./Home.module.css"

import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

import { FaSearch } from "react-icons/fa"



const Home = () => {
  const [query, setquery] = useState("")
  const [posts, setposts] = useState([])

  const handleSubmit = (e) =>  {
    e.preventDefault()


  }

  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ou busque por tags..." className={styles.search_input} onChange={e => setquery(e.target.value)} value={query}/>
        <button className={styles.search_button}><FaSearch/></button>
      </form>
      <div>
        <h1>Posts</h1>
        {posts && posts.length === 0 && (
          <div>
            <p>Não foram encontrados posts...</p>
            <Link to="/posts/newpost"><button className="btn">Comece</button></Link>
          </div>
        )}
      </div>
    </div>
  )
}
export default Home