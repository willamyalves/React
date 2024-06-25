import './App.css'
import listFruits from './components/listFruits'

function App() {

  const fruits = listFruits();

  return (
    <div className="App">
      {fruits.map((fruit)=>(
        <div key={fruit.id}>
          <h1>{fruit.name}</h1>
          <p>{fruit.color}</p>
        </div>
      ))}
    </div>
  )
}

export default App
