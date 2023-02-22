import "./Auth.css"

// components
import {Link} from "react-router-dom"
import Message from "../../components/Message"

// hooks
import { useState, useEffect } from "react"

// redux
import {register, reset} from "../../slices/authSlice"
import { useSelector, useDispatch } from "react-redux"


const Register = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")

  // dispatch é por onde poderemos utilizar as funções do slice
  const dispatch = useDispatch()

  // estados sendo pegos do slice "auth" em authSlice.js
  const {loading, error} = useSelector(state => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword
    }
    console.log("O loading é "+loading)
    dispatch(register(user))
    console.log(loading)
  }

  // este use effect serve para resetar todos os estados
  // após o fim da utilização (loading e error)
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])


  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos de seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={name} onChange={e => setname(e.target.value)} autoComplete="name"/>
        <input type="email" placeholder="E-mail" value={email} onChange={e => setemail(e.target.value)} autoComplete="email"/>
        <input type="password" placeholder="Senha" value={password} onChange={e => setpassword(e.target.value)} autoComplete="new-password"/>
        <input type="password" placeholder="Confirme sua senha" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} autoComplete="new-password"/>

        {!loading && <input type="submit" value="Cadastrar"/>}
        {loading && <input type="submit" value="Aguarde" disabled/>}
        {error && <Message msg={error} type="error"/>}
      </form>
      <p>Já possui conta? <Link to="/login">Clique aqui.</Link></p>
    </div>
  )
}
export default Register