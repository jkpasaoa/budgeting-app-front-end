import BudgetEditForm from "../Components/BudgetEditForm";

function Edit() {
  return (
    <div className="New Edit" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Edit Transaction</h2>
      <BudgetEditForm />
    </div>
  );
}

export default Edit;