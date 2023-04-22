import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BudgetEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();

  const [transaction, setTransaction] = useState({
    date: "",
    itemName: "",
    amount: 0,
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data)
      })
      .catch((e) => console.error(e))

  }, [index]);


  const updateTransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`)
      }
      )
      .catch((e) => console.error(e));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          className="form-control"
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <br />
        <label htmlFor="itemName" className="form-label">Name:</label>
        <input
          className="form-control"
          id="itemName"
          type="text"
          value={transaction.itemName}
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br />
        <label className="form-label" htmlFor="amount">
          Amount:
        </label>
        <input
          className="form-control"
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleNumberChange}
          required
        />
        <br />
        <label htmlFor="form-label">Category:</label>
        <select
          className="form-select"
          id="category"
          type="text"
          checked={transaction.category}
          onChange={handleSelectChange}
        >
          <option value="income">Income</option>
          <option value="gift">Gift</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="medical">Medical</option>
          <option value="bill">Bill</option>
          <option value="groceries">Groceries</option>
          <option value="transportation-related">Transportation-related</option>
        </select>
        <br />
        <input className="btn btn-primary" type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <br />
        <button className="btn btn-secondary">Nevermind!</button>
      </Link>
    </div>
  );
}

export default BudgetEditForm;
