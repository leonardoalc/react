import styles from "./About.module.css"

import { Link } from "react-router-dom"

import { useAuthValue } from "../../context/AuthContext"

const About = () => {

  const { user } = useAuthValue()

  return (
    <div className={styles.container}>
      <h2>Sobre o mini<span>BLOG</span></h2>
      <p>Este projeto consiste em um blog feito com react no front-end e firebase no backend</p>

      {!user && <Link to="/login" className={styles.link}>Entre para postar</Link>}
      {user && <Link to="/posts/newpost" className={styles.link}>Começar a postar</Link>}
    </div>
  )
}
export default About