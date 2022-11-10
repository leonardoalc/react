const Challenge = () => {
    const n1 = Math.floor(Math.random() * 500) + 1
    const n2 = Math.floor(Math.random() * 500) + 1

    return (
        <div>
            <h2>Irei imprimir dois valores númericos</h2>
            <p>Valor 1: {n1}</p>
            <p>Valor 2: {n2}</p>
            <button onClick={() => console.log(n1 + n2)}>Somar</button>
        </div> 
    )
}
export default Challenge