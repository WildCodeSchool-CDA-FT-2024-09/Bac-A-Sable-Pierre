import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Mon Portefolio</h1>
      </header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/repo">Repo</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;