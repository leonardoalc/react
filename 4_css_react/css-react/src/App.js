import './App.css';
// componentes
import MyComponent from './components/MyComponent';
import Title from './components/Title';
// hooks 
import { useState } from 'react';


function App() {
  const [n, setN] = useState(11)

  const [redTitle, setredTitle] = useState(true)
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>CSS em React</h1>
      {/* CSS Componente */}
      <MyComponent/>
      <p>Este parágrafo não é de componente</p>
      {/* CSS INLINE */}
      <p style={{ color: "blue", padding: "25px", border: "5px solid magenta", borderTop: "9px solid purple"}}>Este está sendo feito com CSS inline</p>
      {/* CSS INLINE DINÂMICO */}
      <hr />
      <h2 style={n < 10 ? ({backgroundColor: "purple"}) : ({backgroundColor: "Cyan"})} id="h2-dinamic">CSS Dinâmico inline</h2>
      <button onClick={() => (n > 10 ? (setN(9)) : (setN(11)))}>Mudar Cor</button>
      {/* CSS CLASSES DINÂMICAS */}
      <h2 className={redTitle ? "red-title" : "title"} onClick={() => redTitle ? (setredTitle(false)) : (setredTitle(true))}>Este título terá classe dinâmica! Clique nele!</h2>
      {/* CSS MODULES */}
      <Title/>
    </div>
  );
}

export default App;