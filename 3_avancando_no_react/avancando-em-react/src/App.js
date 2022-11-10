import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

// Importando imagens
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagens em Public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
    {/* Imagens em Assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
  );
}

export default App;