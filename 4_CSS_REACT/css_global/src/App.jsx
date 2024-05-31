import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {

  const x = 1;

  const redTitle = true;

  return (
      <div className='App'>
        <h1>CSS no React</h1>
        <MyComponent/>
        <p>Pegou o CSS do componente</p>
        <h2 style={x > 10 ? {color: "purple"} : {color: "orange"}}>CSS Dinâmico</h2>
        <h2 className={redTitle ? "red-title" : "title" }>Este título vai ter uma classe</h2>
        <Title/>
      </div>
  )
}

export default App
