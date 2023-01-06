import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"

import { useAthentication } from "../hooks/useAuthentication"

import { useAuthValue } from "../context/AuthContext"

const NavBar = () => {

  const {user} = useAuthValue()

  return (
    <nav className={styles.navbar_nav}>
        <div className={styles.nav_box1}>
            <NavLink to="/" className={styles.miniblog_link}>Mini<span className={styles.blog_span}>BLOG</span></NavLink>
        </div>
        <div className={styles.nav_box2}>
            <NavLink to="/" className={({isActive})=> isActive ? styles.ativo : styles.nao_ativo}>Home</NavLink>
            {!user && 
              (<>
                <NavLink to="/login" className={({isActive})=> isActive ? styles.ativo : styles.nao_ativo}>Entrar</NavLink>
                <NavLink to="/register" className={({isActive})=> isActive ? styles.ativo : styles.nao_ativo}>Cadastrar</NavLink>
              </>)
            }
            {user && (
                <>
                  <NavLink to="/posts/newpost" className={({isActive})=> isActive ? styles.ativo : styles.nao_ativo}>Novo Post</NavLink>
                  <NavLink to="/dashboard" className={({isActive})=> isActive ? styles.ativo : styles.nao_ativo}>Dashboard</NavLink>
                </>
              )
            }
            <NavLink to="/about" className={({isActive})=> isActive ? styles.ativo : styles.nao_ativo}>Sobre</NavLink>
        </div>
    </nav>
  )
}
export default NavBar