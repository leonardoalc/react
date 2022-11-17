import './App.css';

// Componentes
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

// Hooks
import { useState } from 'react';

// Importando imagens
import City from "./assets/city.jpg"

function App() {
  const cars = [{id: 1, brand: "KIA", km: 12330, color: "Azul", newCar: false},
  {id: 2, brand: "Ferrari", km: 0, color: "Vermelho", newCar: true},
  {id: 3, brand: "Chevrolet", km: 0, color: "Amarelo", newCar: true}
  ]

  function alertMe() {
    console.log("Você está sendo alertado!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const [people] = useState([
    {id: 1, name: "Leonardo", age: 19, job: "Programmer"}, 
    {id: 2, name: "Isabel", age: 20, job: "Psychologist"},
    {id: 3, name: "Jenifer", age: 15, job: "Student"},
    {id: 4, name: "Lafarel", age: 26, job: "Teacher"}
  ])
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
      <hr/>
      <ListRender/>
      <hr/>
      <ConditionalRender/>
      <hr/>
      <CarDetails brand="BMW" km={1000} color="Preto" newCar={false}/>
      {/* Reutilizando o car details */}
      <hr/>
      <CarDetails brand="Fiat" km={23455} color="Azul" newCar={false}/>
      <CarDetails brand="Renault" km={0} color="Prata" newCar={true}/>
      {/* Reutilizando o car details mas em loop */}
      <hr/>
      {cars.map((cars) => (
        <CarDetails 
        key={cars.id}
        brand={cars.brand} 
        km={cars.km} 
        color={cars.color} 
        newCar={cars.newCar}
        />
      ))}
      <hr/>
      <Fragment/>
      {/* Container */}
      <hr/>
      <Container>
        <p>Este é o conteúdo</p>
        <p>Lembrando que o carro é da marca {cars[2].brand}</p>
        {<ManageData/>}
      </Container>
      {/* Exectuar função com prop */}
      <hr/>
      <ExecuteFunction alertar={alertMe}/>
      {/* State Lift */}
      <hr/>
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      <hr/>
      {people.map((people) => (
        <UserDetails
        key={people.id}
        name={people.name}
        age={people.age}
        job={people.job}
        />
      ))}
    </div>
  );
}

export default App;