import styles from "./NewPost.module.css"

import { useState } from "react"

import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"

const NewPost = () => {

  const [title, settitle] = useState("")
  const [image, setimage] = useState("")
  const [body, setbody] = useState("")
  const [tags, settags] = useState([])
  const [error, seterror] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(
      title,
      image,
      body,
      tags
    )
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
        <button type="submit" className="btn">Criar post</button>
        {/*{!loading && <button type="submit" className="btn">Cadastrar </button>}
        {loading && <button disabled className="btn">Aguarde</button>}
        {error && <p className="error">{error}</p>}*/}
      </form>
    </div>
  )
}
export default NewPost