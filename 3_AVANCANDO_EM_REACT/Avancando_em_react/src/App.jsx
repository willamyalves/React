import './App.css'
import futuristicHome from './assets/futuristic-home.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import Data from './components/Data'
import Fragments from './components/Fragments';
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';

import { useState } from 'react';
import ChangeMessage from './components/ChangeMessage';


function App() {

  const cars = [
    {id: 1, brand: "VW", km: 156, color: "Vermelho"},
    {id: 2, brand: "Kia", km: 48, color: "Branco"},
    {id: 3, brand: "Toyota", km: 5345, color: "Preto"}
  ]

  function showMessage(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className='App' style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      <img src="/boat.jpg" alt="Barco" />
      <h2>Uma outra imagem:</h2>
      <img src={futuristicHome} alt="Quarto futurístico"/>
      <Data/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name="Willamy"/>
      {cars.map((car)=>(
        <CarDetails 
        key={car.id} 
        brand={car.brand}
        km={car.km} 
        color={car.color}
        />
      ))}
      <Fragments/>
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <h3>Teste</h3>
        <p>Meu container</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  );
}

export default App
