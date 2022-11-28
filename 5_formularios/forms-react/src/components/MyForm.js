import "./MyForm.css"

//hooks
import { useState } from 'react'

const MyForm = ({user}) => {
    // 3 - gerenciamento de dados
    const [name, setname] = useState(user ? user.name : "")
    const [email, setemail] = useState(user ? user.email : "")
    const [bio, setbio] = useState("")
    const [role, setrole] = useState("")

    const handleName = (e) => {
        setname(e.target.value)
    }

    const handleSubmit= (event) => {
        event.preventDefault()
        console.log(email, name, bio, role)

        // 7- limpar formulário
        setname("")
        setemail("")
        setbio("")
        setrole("")
    }
    return (
        <div>
            {/*1- criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name} required/>
                </div>
                {/*2- Label envolvendo input */}
                <div>
                    <label>
                        <span>E-mail</span>
                        <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setemail(e.target.value)} value={email} required/>
                    </label>
                </div>
                {/* 8- textarea */}
                <div>
                    <label>
                        <span>Bio</span>
                        <textarea name="bio" placeholder="Digite sua bio" onChange={(e) => setbio(e.target.value)} value={bio}></textarea>
                    </label>
                </div>
                {/* 9- select */}
                <div>
                    <label>
                        <span>Função no sistema</span>
                        <select name="role" onChange={(e) => setrole(e.target.value)} value={role}>
                            <option value="user">Usuário</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default MyForm