import BudgetNewForm from "../Components/BudgetNewForm";

function New() {
  return (
    <div className="New" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Add a New Transaction</h2>
      <BudgetNewForm />
    </div>
  );
}

export default New;