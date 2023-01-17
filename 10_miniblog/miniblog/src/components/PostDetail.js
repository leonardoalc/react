import styles from "./PostDetail.module.css"

import { Link } from "react-router-dom"

const PostDetail = ( {post} ) => {
  return (
    <div className={styles.post_container}>
        <img src={post.image} alt={post.title} className={styles.post_img}/>
        <div className={styles.box2}>
            <h2>{post.title}</h2>
            <div className={styles.tags_container}>
                {post.tagsArray.map((tag) => (
                    <p key={tag}><span>#</span>{tag}</p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className={styles.post_link}>
                Ler
            </Link>
        </div>
    </div>
  )
}
export default PostDetail