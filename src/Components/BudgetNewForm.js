import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function BudgetNewForm() {
  const navigate = useNavigate();
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
    setTransaction({ ...transaction, [event.target.id]: event.target.value })
  }

  const addTransaction = () => {
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => {
        navigate('/transactions');
      }).catch((c) => console.error("catch", c))
  }

  const handleClear = () => {
    setTransaction({
      date: "",
      itemName: "",
      amount: 0,
      from: "",
      category: "",
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction()
    handleClear();
  };


  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="date">
          Date:
        </label>
        <input
          className="form-control"
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="MM-DD-YYYY Write the date in this format"
          required
        />
        <br />
        <label className="form-label" htmlFor="itemName">
          Name:
        </label>
        <input
          className="form-control"
          id="itemName"
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          value={transaction.itemName}
        />
        <br />
        <label className="form-label" htmlFor="amount">
          Amount:
        </label>
        <input
          className="form-control"
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleNumberChange}
        />
        <br />
        <label className="form-label" htmlFor="from">
          From:
        </label>
        <input
          className="form-control"
          id="from"
          type="text"
          placeholder="from"
          onChange={handleTextChange}
          value={transaction.from}
        />
        <br />
        <label className="form-label" htmlFor="category">
          Category:
        </label>
        <select
          className="form-select"
          id="category"
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
        <input
          className="btn btn-primary"
          type="submit"
          value={"Submit New Budget Item"}
        />
        <button className="btn btn-secondary" type="button" onClick={handleClear}>
          Clear Fields
        </button>
      </form>
    </div>
  );
}

export default BudgetNewForm;
