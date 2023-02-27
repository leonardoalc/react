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


const Profile = () => {

    const {id} = useParams()

    const dispatch = useDispatch()

    // usuário que está sendo acessado
    const {user, loading} = useSelector((state) => state.user)
    // usuário que está logado/autenticado
    const {user: userAuth} = useSelector((state) => state.auth)

    // photo

    // Load user data
    useEffect(() => {
        dispatch(getUserDetails(id))
    }, [dispatch, id])

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
    </div>
  )
}
export default Profile