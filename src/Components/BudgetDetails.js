import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function BudgetDetails() {
  let navigate = useNavigate()
  const [transaction, setTransactions] = useState({});
  let { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransactions(response.data)
      }).catch(() => {
        navigate("/not-found")
      })
  }, [index, navigate]);
  
  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`)
      })
    .catch((e) => console.error(e))
   };
  
  return (
    <article>
      <h3>
        {transaction.isFavorite ? <span>⭐️</span> : null} {transaction.name}
      </h3>
      {/* <h5>
        <span> */}
          {/* <a href={transaction.url}>{transaction.name}</a> */}
        {/* </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {transaction.url}
      </h5> */}
      <h3 textalign="left">Id:</h3>
      <h3>{transaction.id}</h3>
      <h3>{transaction.item_name}</h3>
      <h3>{transaction.amount}</h3>
      <h3>{transaction.date}</h3>
      <h3>{transaction.from}</h3>
      <h3>{transaction.category}</h3>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default BudgetDetails;