import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';

// Importando imagens
import City from "./assets/city.jpg"

const cars = [{id: 1, brand: "KIA", km: 12330, color: "Azul", newCar: false},
{id: 2, brand: "Ferrari", km: 0, color: "Vermelho", newCar: true},
{id: 3, brand: "Chevrolet", km: 0, color: "Amarelo", newCar: true}
]


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
      {/* Reutilizando o car details mas em loop */}
      {cars.map((cars) => (
        <CarDetails 
        key={cars.id}
        brand={cars.brand} 
        km={cars.km} 
        color={cars.color} 
        newCar={cars.newCar}
        />
      ))}
      <Fragment/>
    </div>
  );
}

export default App;