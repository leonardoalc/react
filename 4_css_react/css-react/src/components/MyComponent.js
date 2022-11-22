import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
        <h1>Css de Componente</h1>
        <p>Parágrafo de componente.</p>
        <p className="p-my-comp">Este também é, mas não está com css vazando</p>
    </div>
  )
}
export default MyComponent