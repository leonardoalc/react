import { useState } from "react"

const ListRender = () => {
    const [list]  = useState(["Leonardo", "Isabel"])
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Leo",
            age: 19
        },
        {
            id: 2,
            name: "Isabel",
            age: 21
        },
        {
            id: 3,
            name: "Lael",
            age: 950
        },
        {
            id: 4,
            name: "Popov",
            age: 57
        }
    ])
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
    
        setUsers((prevUsers) => {
          return prevUsers.filter((user) => randomNumber !== user.id);
        });

        console.log(randomNumber)
      };
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Deletar usuário aleatório</button>
        </div>
    )
}
export default ListRender