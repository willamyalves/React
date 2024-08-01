import { useCallback, useState } from "react";
import ShowList from "./ShowList";
const UseRef = () => {
  const getList = useCallback(() => {
    return ["EUA", "Canada", "Suiça"];
  }, []);
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>Aprendendo o useCallBack</h2>
      <ShowList list={getList} />
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Incrementar</button>
    </div>
  );
};

export default UseRef;
