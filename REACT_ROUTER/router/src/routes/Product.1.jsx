import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: product } = useFetch(url);

  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      {}if ()}
      <p>ID do produto: {product.id}</p>
      <div>
        <h1>{product.name}</h1>
        <p>R${product.price}</p>
      </div>
    </div>
  );
};
