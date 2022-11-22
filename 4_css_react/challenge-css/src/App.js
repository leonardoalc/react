import './App.css';

// componentes
import CarDetails from './components/CarDetails';

function App() {
  const cars = [{
      id: 1,
      brand: "ford",
      km: 32000,
      color: "branco"
    },
    {
      id: 2,
      brand: "bmw",
      km: 0,
      color: "ciano"
    },
    {
      id: 3,
      brand: "mercedes",
      km: 100000,
      color: "amarelo"
    }
  ]
  return (
    <div className="App">
      <h1 className="h1-app">Carros</h1>
      <div className="cars-container">
        {cars.map((cars) => (
          <CarDetails
          key={cars.id}
          id={cars.id}
          brand={cars.brand}
          km={cars.km}
          color={cars.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
