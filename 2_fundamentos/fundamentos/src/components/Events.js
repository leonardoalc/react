const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e)

    console.log("Boa")
  }
  
  const renderSomething = (x) => {
    if(x) {
      return <h3>Renderizando isso!</h3>
    } else {
      return <h3>Renderizando aquilo!</h3>
    }
  }

  return (
    <div>
        <button onClick={handleMyEvent}>Clique Aqui</button> <br/>
        <button onClick={() => console.log("Clicou na segunda função!")}>Mais um Evento</button>
        {renderSomething(true)}
    </div>
  )
}
export default Events