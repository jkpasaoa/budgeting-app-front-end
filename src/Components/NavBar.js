import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="app-name">
      <h1>
        <Link to="/transactions">Budgeting App</Link>
      </h1>
      </div>
      <button className="new-transaction">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}

export default NavBar;
