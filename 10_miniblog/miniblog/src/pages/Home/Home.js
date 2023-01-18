import styles from "./Home.module.css"

import { useNavigate, Link, Navigate } from "react-router-dom"
import { useState } from "react"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"

import PostDetail from "../../components/PostDetail"
import SearchForm from "../../components/SearchForm"


const Home = () => {
  const { documents: posts, loading} = useFetchDocuments("posts")

  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <SearchForm/>
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