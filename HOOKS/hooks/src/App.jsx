import { useState } from "react";
import { usePrevious } from "./hooks/usePrevious";

import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div className="App">
      <p>Valor atual: {number}</p>
      <p>Valor anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random)}>Alterar</button>
    </div>
  );
}

export default App;
