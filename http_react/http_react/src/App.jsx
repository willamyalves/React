import { useState, useEffect} from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const url = "http://localhost:3000/description"

  useEffect(()=>{

    async function getData(){

      const response = await fetch(url)

      const data = await response.json();

      setProducts(data)
    }
    getData();
  }, [])

  return (
      <div className='App'>
        <ul>
          {products.map((product)=>(
            <li key={product.id} id={product.id}>{product.name} - R${product.price}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Nome do produto</span>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Digite o nome do produto...'/>
          </label>

          <label htmlFor='price'>
            <span>Preço</span>
            <input type="text" name="price" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder='Digite o preço do produto'/>
          </label>

          <button type="submit">Enviar</button>
        </form>

      </div>
  )
}

export default App
