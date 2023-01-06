import styles from "./Register.module.css"
import { useState, useEffect } from "react"

import { useAthentication } from "../../hooks/useAuthentication"


const Register = () => {
    const [displayName, setdisplayName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [error, seterror] = useState("")

    const {createUser, error: authError, loading} = useAthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        seterror("")

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            seterror("As senhas precisa ser iguais!")
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() => {

        if(authError) {
            seterror(authError)
        }

    }, [authError])
  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>
                <input type="text" name="displayname" required placeholder="Nome" value={displayName} onChange={(e) => setdisplayName(e.target.value)}/>
            </label>
            <label>
                <input type="email" name="email" required placeholder="Email" autoComplete="email" value={email} onChange={(e) => setemail(e.target.value)}/>
            </label>
            <label>
                <input type="password" name="password" required minLength="3" autoComplete="new-password" placeholder="Senha" value={password} onChange={(e) => setpassword(e.target.value)}/>
            </label>
            <label>
                <input type="password" name="confirmPassword" required minLength="3" autoComplete="new-password" placeholder="Confirme a sua senha" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}/>
            </label>
            {!loading && <button type="submit">Cadastrar </button>}
            {loading && <button className="" disabled>Aguarde</button>}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}
export default Register