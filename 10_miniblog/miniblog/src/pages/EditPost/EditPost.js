import styles from "./EditPost.module.css"

import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useUpdateDocument } from "../../hooks/useUpdateDocument"
import { useFetchDocument} from '../../hooks/useFetchDocument'

const EditPost = () => {
  const {id} = useParams()
  const {document: post} = useFetchDocument("posts", id)

  const [title, settitle] = useState("")
  const [image, setimage] = useState("")
  const [body, setbody] = useState("")
  const [tags, settags] = useState([])
  const [formError, setformError] = useState("")

  useEffect(() => {

    if(post) {
        settitle(post.title)
        setbody(post.body)
        setimage(post.image)

        const textTags = post.tagsArray.join(", ")

        settags(textTags)
    }
    
  }, [post])
  

  const {updateDocument, response} = useUpdateDocument("posts")
  const {user} = useAuthValue()
  const navigate = useNavigate()

  const cleanData = () => {
    settitle("")
    setimage("")
    setbody("")
    settags("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setformError("")

    // validar url da imagem
    try{
      new URL(image)
    } catch (err)  {
      return setformError("A imagem precisa ser uma URL.")
    }
    // criar array de tags
    const tagsArray = tags.split(",").map(tag => tag.trim().toLowerCase())

    console.log(tagsArray)
    // checar todos os valores

    if (!title || !image || !tags || !body) {
        return setformError("Por favor, preencha todos os campos!");
    }

    if(formError) return
    const data = {
        title,
        image,
        body,
        tagsArray,
        uid: user.uid,
        createdBy: user.displayName
      }
    updateDocument(id, data)

    // redirect to homepage
    
    navigate("/dashboard")
  }

  return (
    <div className={styles.newp_container}>
      <h2>Editando Post</h2>
      <p>Altere seu post como desejar</p>
      <form onSubmit={handleSubmit} className={styles.newpost_form}>
        <div className={styles.boxform}>
          <label>
            <span className="sp-input">Título</span>
            <input
              type="text"
              name="title"
              required
              placeholder="Pense em um bom título"
              minLength="3"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </label>
          <label>
            <span className="sp-input">URL da imagem</span>
            <input
              type="text"
              name="urlimg"
              required
              placeholder="Cole a URL da imagem aqui"
              value={image}
              onChange={(e) => setimage(e.target.value)}
            />
          </label>
        </div>
        <label>
          <span className="sp-input">Conteúdo</span>
          <textarea
            type="text" 
            name="body" 
            required 
            placeholder="Insira o conteúdo do seu post" 
            value={body} 
            onChange={(e) => setbody(e.target.value)}
          />
        </label>
        <label>
          <span className="sp-input">Tags</span>
          <input 
            type="text" 
            name="tags" 
            required 
            placeholder="Insira as tags separadas por vírgulas"  
            value={tags} 
            onChange={(e) => settags(e.target.value)}
          />
        </label>
        {!response.loading && <button type="submit" className="btn">Editar</button>}
        {response.loading && <button disabled className="btn">Aguarde</button>}
        {(response.error || formError) && <p className="error">{response.error || formError}</p>}
      </form>
    </div>
  )
}
export default EditPost