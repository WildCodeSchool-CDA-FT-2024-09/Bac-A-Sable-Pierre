import { NavLink, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>My GitHub !</h1>
      </header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/languages">Languages</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
