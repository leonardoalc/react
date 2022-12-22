import "./Product.css"
import { useFetch } from "../hooks/useFetch"
import { Link, useParams } from "react-router-dom"

const Product = () => {
    // 4 rota dinâmica
    const { id } = useParams()

    // 5 carregamendo dado individual
    const url = `http://localhost:3000/products/${id}`
    const {data: product, loading, error} = useFetch(url)
  return <>
    <p>Id do produto: {id}</p>
    {error && <p>Ocorreu um erro!</p>}
    {loading && <p>Carregando...</p>}
    {product && (
        <div className="product-div">
            <h1>{product.name}</h1>
            <p className="price">R${product.price}</p>
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
    )}
  </>
}
export default Product