import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import NavBar from './components/NavBar.js';

// pages
import Home from './pages/Home'
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
