import "./Search.css"

// hooks
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"
import { useQuery } from "../../hooks/useQuery"

// components
import LikeContainer from "../../components/LikeContainer"
import PhotoItem from "../../components/PhotoItem"
import { Link } from "react-router-dom"

// redux
import { searchPhotos, likePhoto } from "../../slices/photoSlice"

const Search = () => {
    const dispatch = useDispatch()

    const query = useQuery() 
    const search = query.get("q")

    const resetMessage = useResetComponentMessage()

    const {user} = useSelector((state) => state.auth)
    const {photos, loading} = useSelector((state) => state.photo)

    // load photos
    useEffect(() => {
        dispatch(searchPhotos(search))
    }, [dispatch, search])

    // like photo
    const handleLike = (photo) => {
        dispatch(likePhoto(photo._id))
        resetMessage()
    }

    if (loading) {
        return <p>Carregando...</p>
    }

  return (
    <div id="search">
        <h2>Você está buscando: {search}</h2>
        {photos && photos.map((photo) => (
            <div key={photo._id}>
                <PhotoItem photo={photo}/>
                <LikeContainer photo={photo} user={user} handleLike={handleLike}/>
                <Link to={`/photos/${photo._id}`} className="btn">Ver mais</Link>
            </div>
        ))}
        {photos && photos.length === 0 && (
            <h2 className="no-photos">Não foram encontradas fotos</h2>
        )}
    </div>
  )
}
export default Search