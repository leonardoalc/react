import './App.css';

import { useState, useEffect } from "react"

//4 custom hook
import { useFetch } from './hooks/useFetch';

function App() {
  const [products, setproducts] = useState([])
  const url = "http://localhost:3000/products"

  const [name, setname] = useState("")
  const [price, setprice] = useState(undefined)

  //4 custom hook
  const { data: items, httpsConfig, loading, error } = useFetch(url)

  //1 resgatando dados
  /*useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)

      const data = await res.json()
  
      setproducts(data)  
    }
    fetchData()
  }, []) */
  //2 add de produtos

  const cleanForm = () => {
    setname("")
    setprice(undefined)
  }
  const HandleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }
    /*
      const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const addedProduct = await res.json()

    //3 carregamento dinâmico
    setproducts((prevProducts) => [...prevProducts, addedProduct])
     */
    //5 refatorando post
    httpsConfig(product, "POST")
    cleanForm()
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/*6 loading */}
      {loading && <p>Carregando os dados...</p>}
      {error && <p>{error}</p>}
      {!error && <ul>
        {items && items.map((p) => (
          <li key={p.id}>{p.name} - R${p.price}</li>
        ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={HandleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" value={name} name="name" onChange={e => setname(e.target.value.toLocaleLowerCase())} required/>
          </label>
          <label>
            <span>Preço:</span>
            <input type="number" value={price || ""} name="price" onChange={e => setprice(e.target.value)} required/>
          </label>
          {/*7 state de loading no post*/}
          {loading && <button type="submit" disabled>Aguarde</button>}
          {!loading && <button type="submit">Enviar Produto</button>}
        </form>
      </div>
    </div>
  );
}

export default App;
