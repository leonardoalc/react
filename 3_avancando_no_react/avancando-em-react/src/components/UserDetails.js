const UserDetails = ({name, age, job}) => {
    return (
        <div>
            <h2>Pessoa: {name}</h2>
            <p>Atividade: {job}</p>
            <p>Idade: {age}</p>
            {age >= 18 ? (<p>Pode dirigir</p>) : (<p>Não pode dirigir</p>)}
        </div>
    )
}
export default UserDetails