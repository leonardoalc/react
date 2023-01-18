import styles from "./Post.module.css"

import { useParams } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument"

const Post = () => {
    const { id } = useParams()
    const { document: post, loading, error} = useFetchDocument("posts", id)
  return (
    <div className={styles.post_container}>
        {loading && <p>Carregando</p>}
        {post && (
            <>
                <h1>{post.title}</h1>
                <img src={post.image} alt="" className={styles.post_img}/>
                <p className={styles.body_text}>{post.body}</p>
                <h2>Este post trata sobre:</h2>
                <div className={styles.tags_container}>
                    {post.tagsArray.map((tag) => (
                        <p key={tag}>#{tag}</p>
                    ))}
                </div>
            </>
        )}
        {error && <p className="error">{error}</p>}
    </div>
  )
}
export default Post