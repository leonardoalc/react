import "./Auth.css"

// components
import { Link } from "react-router-dom"
import AuthMessage from "../../components/AuthMessage"

// hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// redux
import { login, reset } from "../../slices/authSlice"

const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const dispatch = useDispatch()

  const {loading, error} = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email,
      password
    }

    dispatch(login(user))
  }

  // limpando states de loading e erro
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Faça o login para ver o que há de novo.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setemail(e.target.value)}/>
        <input type="password" autoComplete="current-password" placeholder="Senha" value={password} onChange={(e) => setpassword(e.target.value)} />
        <AuthMessage 
          actionName="Entrar" 
          msg={error} 
          type={error ? "error" : "success"}
          loading={loading ? true : false}
          error={error? true : false}
          />
      </form>
      <p>Não tem uma conta? <Link to="/register">Clique aqui.</Link></p>
    </div>
  )
}
export default Login