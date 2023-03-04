import "./Photo.css"

import { uploads } from "../../utils/config"
// components
import Message from "../../components/Message"
import { Link } from "react-router-dom"
import PhotoItem from "../../components/PhotoItem"
import LikeContainer from "../../components/LikeContainer"

// hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"

// redux
import { comment, getPhoto, likePhoto } from "../../slices/photoSlice"


const Photo = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    const resetMessage = useResetComponentMessage(dispatch)

    const {user} = useSelector((state) => state.auth)
    const {photo, loading, error, message} = useSelector((state) => state.photo)

    const [commentText, setcommentText] = useState("")


    // load photo data
    useEffect(() => {
        dispatch(getPhoto(id))
    }, [dispatch, id])

    const handleLike = () => {
      dispatch(likePhoto(photo._id))
      resetMessage()
    }

    const handleComment = (e) => {
      e.preventDefault()

      const commentData = {
        comment:  commentText,
        id: photo._id
      }

      dispatch(comment(commentData))

      setcommentText("")

      resetMessage()
    }
    if (loading) {
        return <p>Carregando...</p>
    }

  return (
    <div id="photo">
        <PhotoItem photo={photo}/>
        <LikeContainer handleLike={handleLike} photo={photo} user={user}/>
        <div className="message-container">
          {error && <Message msg={error} type="error"/>}
          {message && <Message msg={message} type="success"/>}
        </div>
        <div className="comments">
          {photo.comments && (
            <>
              <h3>Comentários: ({photo.comments.length})</h3>
              <form onSubmit={handleComment}>
                  <input type="text" placeholder="Insira seu comentário" value={commentText || ""} onChange={(e) => setcommentText(e.target.value)}/>
                  <input type="submit" value="Enviar"/>
              </form>
              {photo.comments === 0 && <p>Não há comentários...</p>}
              {photo.comments.slice(0).reverse().map((comment) => (
                <div className="comment" key={comment.comment}>
                  <div className="author">
                    {comment.userImage && (
                      <img src={`${uploads}/users/${comment.userImage}`} alt={comment.userName}/>
                    )}
                    <Link to={`/users/${comment.userId}`}>
                      <p>{comment.userName}</p>
                    </Link>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </>
          )}
        </div>
    </div>
  )
}
export default Photo