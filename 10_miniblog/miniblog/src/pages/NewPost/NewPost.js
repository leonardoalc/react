import styles from "./NewPost.module.css"

import { useState } from "react"

import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocument"

const NewPost = () => {

  const [title, settitle] = useState("")
  const [image, setimage] = useState("")
  const [body, setbody] = useState("")
  const [tags, settags] = useState([])
  const [formError, setformError] = useState("")

  const {insertDocument, response} = useInsertDocument("posts")
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

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    // redirect to homepage
    
    navigate("/")
  }

  return (
    <div className={styles.newp_container}>
      <h2>Criar Post</h2>
      <p>Escreva sobre oque quiser e compartilhe o seu conhecimento!</p>
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
        {!response.loading && <button type="submit" className="btn">Postar</button>}
        {response.loading && <button disabled className="btn">Aguarde</button>}
        {(response.error || formError) && <p className="error">{response.error || formError}</p>}
      </form>
    </div>
  )
}
export default NewPost