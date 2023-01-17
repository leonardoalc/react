import styles from "./Home.module.css"

import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

import { FaSearch } from "react-icons/fa"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"

import PostDetail from "../../components/PostDetail"



const Home = () => {
  const [query, setquery] = useState("")
  const { documents: posts, loading} = useFetchDocuments("posts")
  console.log(posts)
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
        <h1 className={styles.posts_h1}>Posts</h1>
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post}/>
        ))}
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