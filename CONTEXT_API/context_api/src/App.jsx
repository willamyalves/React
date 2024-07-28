// Router
import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="contact">
        <button>Contato</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default App;
