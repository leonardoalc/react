import "./Auth.css"

// components
import {Link} from "react-router-dom"

// hooks
import { useState, useEffect } from "react"

const Register = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user)
  }
  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos de seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={name} onChange={e => setname(e.target.value)} autoComplete="name"/>
        <input type="email" placeholder="E-mail" value={email} onChange={e => setemail(e.target.value)} autoComplete="email"/>
        <input type="password" placeholder="Senha" value={password} onChange={e => setpassword(e.target.value)} autoComplete="new-password"/>
        <input type="password" placeholder="Confirme sua senha" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} autoComplete="new-password"/>

        <input type="submit" value="Cadastrar"/>
      </form>
      <p>Já possui conta? <Link to="/login">Clique aqui.</Link></p>
    </div>
  )
}
export default Register