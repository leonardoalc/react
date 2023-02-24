import "./EditProfile.css"

import { uploads } from "../../utils/config"

// hooks
import { useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"

// redux
import Messsage from "../../components/Message"
import { profile, resetMessage, updateProfile } from "../../slices/userSlice"

// components 
import AuthMessage from "../../components/AuthMessage"

const EditProfile = () => {

    const dispatch = useDispatch()

    const { user, message, error, loading} = useSelector((state) => state.user)

    // states

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [profileImage, setprofileImage] = useState("")
    const [bio, setbio] = useState("")
    const [previewImage, setpreviewImage] = useState("")

    // load user data
    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    // fill form with user data
    useEffect(() => {
        if (user) {
            setname(user.name)
            setemail(user.email)
            setbio(user.bio)
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()

        // gather user data from states
        const userData = {
            name
        }

        if (profileImage) {
            userData.profileImage = profileImage
        }
        if(bio) {
            userData.bio = bio
        }
        if (password) {
            userData.password =password
        }

        const formData = new FormData() 

        const userFormData = Object.keys(userData).forEach((key) => formData.append(key, userData[key]))

        formData.append("user", userFormData)

        await dispatch(updateProfile(formData))

        setTimeout(() => {
            dispatch(resetMessage())
        }, 3000);
    }

    const handleFile = (e) => {
        // image preview
        const image = e.target.files[0]

        setpreviewImage(image)

        // update image state
        setprofileImage(image)
    }
    if (message) {
        console.log(message)
    }
  return (
    <div id="edit-profile">
        <h2>Edite seus dados</h2>
        <p className="subtitle">Adicione uma imagem de perfil e conte mais sobre você...</p>
        {(user.profileImage || previewImage) && (
            <img
                src={
                    previewImage ? URL.createObjectURL(previewImage) : `${uploads}/users/${user.profileImage}`
                }
                alt={user.name}
                className="profile-image"
            />
        )}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" value={name || ""} onChange={(e) => setname(e.target.value)}/>
            <input type="email" placeholder="E-mail" value={email || ""} onChange={(e) => setemail(e.target.value)} disabled />
            <label>
                <span>Imagem do Perfil</span>
                <input type="file" onChange={handleFile}/>
            </label>
            <label>
                <span>Bio:</span>
                <input type="text" placeholder="Descrição do perfil" value={bio || ""} onChange={(e) => setbio(e.target.value)} autoComplete="off"/>
            </label>
            <label>
                <span>Quer alterarsua senha?</span>
                <input type="password" placeholder="Digite sua nova senha" value={password || ""} onChange={(e) => setpassword(e.target.value)} autoComplete="current-password"/>
            </label>
            <AuthMessage
                actionName="Atualizar"
                msg={error ? error : message}
                loading={loading}
                error={error ? true : false}
                success={message ? true : false}
            />
        </form>
    </div>
  )
}
export default EditProfile