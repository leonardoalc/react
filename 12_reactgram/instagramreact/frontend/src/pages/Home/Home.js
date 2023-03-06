import "./Home.css"

// components
import LikeContainer from "../../components/LikeContainer"
import PhotoItem from "../../components/PhotoItem"
import { Link } from "react-router-dom"

// hooks
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"

// redux
import { getPhotos, likePhoto } from "../../slices/photoSlice"
import { uploads } from "../../utils/config"

const Home = () => {

  const dispatch = useDispatch()

  const resetMessage = useResetComponentMessage(dispatch)

  const {user} = useSelector((state) => state.auth)
  const {photos, loading} = useSelector((state) => state.photo)

  // load all photos
  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  // like photo
  const handleLike = (photo) => {
    dispatch(likePhoto(photo._id))
    resetMessage()
  }

  if (loading) {
    <p>Carregando...</p>
  }
  console.log(photos)
  return (
    <div id="home">
      {photos && photos.map((photo) => (
        <div key={photo._id}>
          <PhotoItem photo={photo}/>
          <LikeContainer photo={photo} user={user} handleLike={handleLike}/>
          <Link to={`/photos/${photo._id}`} className="btn">Ver mais</Link>
        </div>
      ))}
      {photos && photos.length === 0 && (
        <h2 className="no-photos">Não há fotos publicadas, <Link to={`/users/${user._id}`}>Clique aqui</Link></h2>
      )}
    </div>
  )
}
export default Home