import styles from "./Search.module.css"

import PostDetail from "../../components/PostDetail"
import SearchForm from "../../components/SearchForm"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

import { Link } from "react-router-dom"

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div className={styles.searchposts_container}>
        <h2>Exibindo resultados de pesquisa</h2>
        <SearchForm/>
        <div className={styles.posts_container}>
            {posts && posts.length === 0 && (
                <>
                    <p>Não foram encontrados posts a partir da sua busca.</p>
                    <Link to="/"><button className="btn">Comece</button></Link>
                </>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post}/>
            ))}
        </div>
    </div>
  )
}
export default Search