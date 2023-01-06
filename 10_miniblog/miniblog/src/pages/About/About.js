import styles from "./About.module.css"

import { Link } from "react-router-dom"

import { useAuthValue } from "../../context/AuthContext"

const About = () => {

  const user = useAuthValue()

  return (
    <div>
      <h2>Sobre o mini<span>BLOG</span></h2>
      <p>Este projeto consiste em um blog feito com react no front-end e firebase no backend</p>

      <Link to="/login" className={styles.l_ink}>Começar a postar</Link>

      {!user && <Link to="/login">Entre para postar</Link>}
      {user && <Link to="/login">Começar a postar</Link>}
    </div>
  )
}
export default About