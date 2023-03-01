import "./Profile.css"

// link para fazer uploads no backend
import { uploads } from "../../utils/config"

// components
import AuthMessage from "../../components/AuthMessage"
import { Link } from "react-router-dom"
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs"

// hooks
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// redux
import { getUserDetails } from "../../slices/userSlice"
import { publishPhoto, resetMessage, getUserPhotos, deletePhoto, updatePhoto } from "../../slices/photoSlice"
import Message from "../../components/Message"


const Profile = () => {

    const {id} = useParams()

    const dispatch = useDispatch()

    // usuário que está sendo acessado
    const {user, loading} = useSelector((state) => state.user)
    // usuário que está logado/autenticado
    const {user: userAuth} = useSelector((state) => state.auth)

    // estados das fotos
    const {photos, loading: loadingPhoto, message: messagePhoto, error: errorPhoto} = useSelector((state) => state.photo)

    // states para postar imagem
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")

    // states de edição de imagem já postada
    const [editId, seteditId] = useState("")
    const [editImage, seteditImage] = useState("")
    const [editTitle, seteditTitle] = useState("")
    

    // ref de form
    const newPhotoForm = useRef()
    const editPhotoForm = useRef()

    // Load user data
    useEffect(() => {
        dispatch(getUserDetails(id))
        dispatch(getUserPhotos(id))
    }, [dispatch, id])

    const handleFile = (e) => {
        const imagem = e.target.files[0]

        setimage(imagem)
    }

    const handleDelete = (id) => {

        dispatch(deletePhoto(id))

        setTimeout(() => {
            dispatch(resetMessage())
        }, 3000)
    }

    // show or hide forms
    const hideOrShowForm = () => {
        newPhotoForm.current.classList.toggle("hide")
        editPhotoForm.current.classList.toggle("hide")
    }

    const handleEdit = (photo) => {
        if (editPhotoForm.current.classList.contains("hide")) {
            hideOrShowForm()
        }

        seteditTitle(photo.title)
        seteditId(photo._id)
        seteditImage(photo.image)


    }

    const handleUpdate = (e) => {
        e.preventDefault()

        const photoData = {
            title: editTitle,
            id: editId
        }

        dispatch(updatePhoto(photoData))

        setTimeout(() => {
            dispatch(resetMessage())
            window.location.reload(false);
        }, 2000)
    }

    const handleCancelEdit = () => {
        hideOrShowForm()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const photoData = {
            title,
            image
        }

        // build form data
        const formData = new FormData()

        const photoFormData = Object.keys(photoData).forEach((key) => {
            formData.append(key, photoData[key])
        })

        formData.append("photo", photoFormData)

        dispatch(publishPhoto(formData))

        settitle("")
        setTimeout(() => {
            dispatch(resetMessage())
        }, 3000)
    }

    if (loading) {
        return <p>Carregando...</p>
    }

  return (
    <div id="profile">
        <div className="profile-header">
            {user.profileImage &&  (
                <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
            )}
            <div className="profile-description">
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
            </div>
        </div>
        {id === userAuth._id && (
            <>
                <div className="new-photo" ref={newPhotoForm}>
                    <h3>Compartilhe algum momento seu.</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título para a foto:</span>
                            <input type="text" placeholder="Insira um título" value={title} onChange={(e) => settitle(e.target.value)}/>
                        </label>
                        <label>
                            <span>Imagem:</span>
                            <input type="file" onChange={handleFile}/>
                        </label>
                        {!loadingPhoto && <input type="submit" value="Enviar" />}
                        {loadingPhoto && <input type="submit" disabled value="Aguarde..." />}
                    </form>
                </div>
                <div className="edit-photo hide" ref={editPhotoForm}>
                    <p>Editando:</p>
                    {editImage && (
                        <img src={`${uploads}/photos/${editImage}`} alt={editTitle}/>
                    )}
                    <form onSubmit={handleUpdate}>
                        <input type="text" placeholder="Insira um título" value={editTitle} onChange={(e) => seteditTitle(e.target.value)}/>
                        <input type="submit" value="Atualizar" />
                        <button className="cancel-btn" onClick={handleCancelEdit}>Cancelar edição</button>
                    </form>
                </div>
                {errorPhoto && <Message msg={errorPhoto} type="error"/>}
                {messagePhoto && <Message msg={messagePhoto} type="success"/>}
            </>
        )}
        <div className="user-photos">
            <h2>Fotos publicadas:</h2>
            <div className="photos-container">
                {photos && 
                    photos.map((photo) => (
                        <div className="photo" key={photo._id}>
                            {photo.image && (
                                <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
                            )}
                            {id === userAuth._id ? (
                                <div className="actions">
                                    <Link to={`/photos/${photo._id}`}>
                                        <BsFillEyeFill/>
                                    </Link>
                                    <BsPencilFill onClick={() => handleEdit(photo)}/>
                                    <BsXLg onClick={() => handleDelete(photo._id)}/>
                                </div>
                            ) : (<Link className="btn" to={`/photos/${photo._id}`}>Ver</Link>)}
                        </div>
                ))}
                {photos.length === 0 && <p>Ainda não temos fotos publicadas.</p>}
            </div>
        </div>
    </div>
  )
}
export default Profile