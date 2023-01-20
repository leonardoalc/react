import styles from "./Dashboard.module.css"

import { Link } from "react-router-dom"

import {useAuthValue} from "../../context/AuthContext"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useDeleteDocument } from "../../hooks/useDeleteDocument"

const Dashboard = () => {
  const { user } = useAuthValue()
  const {deleteDocument} = useDeleteDocument("posts")

  const uid = user.uid

  // posts do usuário
  const {documents: posts, loading, error} = useFetchDocuments("posts", null, uid)

  if (loading) {
    return (<p>Carregando...</p>)
  }
  return (
    <div className={posts && posts.length === 0 ? styles.container_dashboard_nopost : styles.container_dashboard}>
      <h1>Dashboard</h1>
      <p>Gerencie os seus posts</p>
      {error && <p className="error">{error}</p>}
      {posts && posts.length === 0 &&
        <div>
          <h3>Não foram encotrados posts</h3>
          <p>Clique no botão abaixo para criar seu primeiro post!</p>
          <Link to="/posts/newpost" className={styles.link}>Começar a postar</Link>
        </div>}
      {posts && posts.length > 0 && 
      <div className={styles.posts_container}>
        <div className={styles.desc_container}>
          <p>Título</p>
          <p>Ações</p>
        </div>
        <hr />
        {posts.map((post) => (
          <div key={post.id} className={styles.post_container}>
            <p>{post.title}</p>
            <span className={styles.actions_span}>
            <Link to={`/posts/${post.id}`} className={styles.post_link}>
                Ver
            </Link>
            <Link to={`/posts/edit/${post.id}`} className={styles.post_link}>
                Editar
            </Link>
            <button className={styles.post_delete} onClick={() => {
              if(window.confirm("Deseja deletar esse post?")) {
                deleteDocument(post.id)
              }
            }
            }>
                Excluir
            </button>
            </span>
          </div>
        ))}
      </div>
      }
    </div>
  )
}
export default Dashboard