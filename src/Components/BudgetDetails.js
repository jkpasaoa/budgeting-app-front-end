import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./BudgetDetails.css"

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
    <article className="container container-fluid text-center">
      <table>
        <tbody>
          <tr>
            <th>Date:</th>
            <td>{transaction.date}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>{transaction.itemName}</td>
          </tr>
          <tr>
            <th>Amount:</th>
            <td>
              {transaction.amount}
              <br />
            </td>
          </tr>
          <tr>
            <th>From:</th>
            <td>{transaction.from}</td>
          </tr>
          <tr>
            <th>Category:</th>
            <td>{transaction.category}</td>
          </tr>
          <tr>
            <th>Id:</th>
            <td>{transaction.id}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="button-container">
                <div>
                  <Link to={`/transactions`}>
                    <button className="back-button">Back</button>
                  </Link>
                </div>
                <br />
                <div>
                  <Link className="edit-button" to={`/transactions/${index}/edit`}>
                    <button className="edit-button-title">Edit</button>
                  </Link>
                </div>
                <br />
                <div>
                  <button className="delete" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default BudgetDetails;
