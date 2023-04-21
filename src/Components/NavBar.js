import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/transactions">Budgeting App</Link>
      </h1>
      <button>
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}