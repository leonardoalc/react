import './App.css';
import MyComponent from './components/MyComponent';
function App() {
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>CSS em React</h1>
      {/* CSS Componente */}
      <MyComponent/>
      <p>Este parágrafo não é de componente</p>
    </div>
  );
}

export default App;