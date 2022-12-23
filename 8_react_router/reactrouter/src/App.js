import './App.css';

//1 config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

// components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';



function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        {/*9 Search */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          {/* 4 rota dinâmica */}
          <Route path="/products/:id" element={<Product/>}/>
          {/* Nasted Routes */}
          <Route path="/products/:id/info" element={<Info/>}/>
          {/* 10 redirect */}
          <Route path='/company' element={<Navigate to="/about"/>}/>
          {/* 7 no match route */}
          <Route  path='*' element={<NotFound/>}/>
          {/* 9 Search */}
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
