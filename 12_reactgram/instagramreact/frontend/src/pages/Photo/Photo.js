import "./Photo.css"

import { uploads } from "../../utils/config"
// components
import Message from "../../components/Message"
import { Link } from "react-router-dom"

// hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getPhoto } from "../../slices/photoSlice"
import PhotoItem from "../../components/PhotoItem"


const Photo = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {photo, loading, error, message} = useSelector((state) => state.photo)

    // load photo data
    useEffect(() => {
        dispatch(getPhoto(id))
    }, [dispatch, id])

    console.log(photo)

    if (loading) {
        return <p>Carregando...</p>
    }


  return (
    <div id="photo">
        <PhotoItem photo={photo}/>
    </div>
  )
}
export default Photo