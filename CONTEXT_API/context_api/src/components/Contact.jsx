import { useChangeColorContext } from "../hooks/useChangeColorContext";

const Contact = () => {
  const { color, dispatch } = useChangeColorContext();

  const setColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <>
      <h1 style={{ color: color }}>Um título de contato</h1>
      <button onClick={() => setColor("YELLOW")}>Amarelo</button>
      <button onClick={() => setColor("GREEN")}>Verde</button>
      <button onClick={() => setColor("GRAY")}>Cinza</button>
    </>
  );
};

export default Contact;
