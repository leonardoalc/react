import styles from "./Login.module.css"

import { useState, useEffect } from "react"

import { useAthentication } from "../../hooks/useAuthentication"

const Login = () => {
  // application states
  const { loading, error: authError, login } = useAthentication()
  const [error, seterror] = useState("")

  // login states
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    seterror("")

    console.log(email)
    console.log(password)

    const user = {
      email,
      password
    }

    const res = await login(user)
  }
  useEffect(() => {
    if(authError) {
        seterror(authError)
    }
  }, [authError])
  return (
    <div className={styles.login}>
        <h1>Digite seus dados para logar!</h1>
        <form className={styles.login_form} onSubmit={handleSubmit}>
          <label>
            <input type="email" name="email" autoComplete="email" required placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}/>
          </label>
          <label>
            <input type="password" name="password" autoComplete="current-password" required placeholder="Senha" minLength="6" value={password} onChange={(e) => setpassword(e.target.value)}/>
          </label>
          <button type="submit" className="btn">Entrar</button>
          {error && <p className="error">Erro! {error}</p>}
        </form>
    </div>
  )
}
export default Login