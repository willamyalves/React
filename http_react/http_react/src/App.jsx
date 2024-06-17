import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import { postData } from './hooks/postData';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const url = "http://localhost:3000/description";

  const { loading, data: items } = useFetch(url, "GET");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postData(url, { name, price });
    if (response) {
      
      window.location.reload();
    }
  };

  return (
    <div className='App'>
      {loading && <p>Carregando...</p>}
      <ul>
        {items && items.map((product) => (
          <li key={product.id} id={product.id}>{product.name} - R${product.price}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Nome do produto</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Digite o nome do produto...'
          />
        </label>

        <label htmlFor='price'>
          <span>Preço</span>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Digite o preço do produto'
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
