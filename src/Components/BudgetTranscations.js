import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from "axios";

import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL;
//console.log(API, "Testing api");

function BudgetTransactions() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
    .get(`${API}/transactions`)
    .then((response) => setTransactions(response.data))
    .catch((e) => console.error("catch", e))
  }, []);


  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this transaction!</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transactions, index) => {
              return <Transaction key={index} transaction={transactions} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default BudgetTransactions;