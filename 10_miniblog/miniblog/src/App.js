import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';


// hooks
import { useState, useEffect } from 'react';
import { useAthentication } from './hooks/useAuthentication';

// components
import NavBar from './components/NavBar';

// context
import { AuthProvider } from './context/AuthContext';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NewPost from './pages/NewPost/NewPost';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';



function App() {

  const [user, setuser] = useState(undefined)
  const {auth} = useAthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setuser(user)
    })
  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  console.log(user)
  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
              <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>}/>
              <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/posts/:id' element={<Post/>}/>
              <Route path='/posts/newpost' element={user ? <NewPost/> : <Navigate to="/login"/>}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;