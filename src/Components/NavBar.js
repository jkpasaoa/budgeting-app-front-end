import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="app-name">
        <h1>
          <Link to="/transactions">Budgeting App</Link> <img src="https://raw.githubusercontent.com/jkpasaoa/images/main/calculator.jpeg" alt="calculator" style={{ width: "50px", height: "50px" }}></img>
        </h1>
      </div>
      <button className="new-transaction">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}

export default NavBar;
