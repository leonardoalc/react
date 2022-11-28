import './App.css';

// Componentes
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Daniela", email: "daniela@gmail.com"}}/>
    </div>
  );
}

export default App;
