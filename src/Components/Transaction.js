import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  const date = new Date(transaction.date);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();

  const dateFormat = `${month} ${day}, ${year}`;

  return (
    <tr>
      <td>
        {dateFormat}
      </td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.itemName}</Link>
      </td>
      <td>
        <h5>{transaction.amount}</h5>
      </td>
    </tr>
  );
}

export default Transaction;
