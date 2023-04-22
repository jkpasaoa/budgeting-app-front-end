import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Welcome</h2>
      <h3>To The Budgeting app!</h3>
      Click<span>&nbsp;</span>
      <Link to="/transactions">
        <span>Budgeted Transactions</span>
      </Link>
      <span>&nbsp;</span>to begin
      {/* <Login /> */}
    </div>
  );
}

export default Home;
