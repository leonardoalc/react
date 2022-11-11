import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import CarDetails from './components/CarDetails';

// Importando imagens
import City from "./assets/city.jpg"

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
      <CarDetails brand="BMW" km={1000} color="Preto" newCar={false}/>
      {/* Reutilizando o car details */}
      <CarDetails brand="Fiat" km={23455} color="Azul" newCar={false}/>
      <CarDetails brand="Renault" km={0} color="Prata" newCar={true}/>
    </div>
  );
}

export default App;