import { useReducer, useState } from "react"

const HookeUseReducer = () => {
    // 1 - começando com use reducer
    const [number, dispatch] = useReducer((state, action)  => {
        return Math.random(state)
    }, 1)

    // 2 - avançado no usereducer
    const initialTasks = [
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Fazer outra coisa"}
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }
                settaskText("")

                return[...state, newTask]
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state
        }

    }

    const [taskText, settaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({type: "ADD"})
    }

    const removeTask = (id) => dispatchTasks({type: "DELETE", id})
  return (
    <div>
        <h2>UseReducer</h2>
        <p>Numero: {number}</p>
        <button onClick={dispatch}>Trocar número</button>
        <h3>Tarefas</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskText} onChange={e => settaskText(e.target.value)}/>
            <input type="submit" value="enviar" />
        </form>
        <ol>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
        </ol>
    </div>
  )
}
export default HookeUseReducer