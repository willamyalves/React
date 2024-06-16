import { useState, useEffect} from 'react'
import { useFetch } from './hooks/useFetch';
import './App.css'

function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const url = "http://localhost:3000/description"


  //GET
  useEffect(()=>{

    async function getData(){

      const response = await fetch(url)

      const data = await response.json();

      setProducts(data)
    }
    getData();
  }, [])
  //\GET

  //new GET

    const {data} = useFetch(url);
    console.log(data);

  //\new GET


  const handleSubmit = async (e)=>{
    
    e.preventDefault();

    const product = {
      name, 
      price
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const data = await response.json();
    
    setProducts((prevProducts)=>[...prevProducts, data])
  }

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
