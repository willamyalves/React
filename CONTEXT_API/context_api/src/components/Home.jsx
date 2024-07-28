import { useChangeColorContext } from "../hooks/useChangeColorContext";

const Home = () => {
  const { color, dispatch } = useChangeColorContext();

  const setColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <>
      <h1 style={{ color: color }}>Um título qualquer</h1>
      <button onClick={() => setColor("RED")}>Vermelho</button>
      <button onClick={() => setColor("BLUE")}>Azul</button>
      <button onClick={() => setColor("ORANGE")}>Laranja</button>
    </>
  );
};

export default Home;
