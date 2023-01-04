import "./NavBar.css"

import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <NavLink to="/" className={({isActive}) => isActive ? "ativo" : "nao-ativo"}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "ativo" : "nao-ativo"}>About</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? "ativo" : "nao-ativo"}>Products</NavLink>
    </div>
  )
}
export default NavBar