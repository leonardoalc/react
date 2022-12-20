import { Link } from "react-router-dom"
import { useFetch, UseFetch } from "../hooks/useFetch"

import "./Home.css"

const Home = () => {

  const url = "http://localhost:3000/products"

  const {data: items, loading, error} = useFetch(url)


  return (
    <div>
        {error && <p>{error}</p>}
        <ul className="products">
          {items && items.map(item =>(
            <li key={item.id} className="product">
              <h2>{item.name}</h2>
              <p className="price">R${item.price}</p>
              {/* 4 rota dinâmica */}
              <Link to={`products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}
export default Home