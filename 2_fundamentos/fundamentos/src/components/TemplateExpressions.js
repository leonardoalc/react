import MyComponent from "./MyComponent"

const TemplateExpressions = () => {

    const name = "Alã"
    const data = {
        idade: 19,
        trabalho: "programador"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>        
            <p>Você atualmente tem {data.idade} anos e trabalha como {data.trabalho}</p>
            <MyComponent/>
        </div>
    )
}

export default TemplateExpressions