import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    amount: "",
    date: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(form);
    setForm({ name: "", description: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleInput} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleInput} />
      <input name="amount" placeholder="Amount" value={form.amount} onChange={handleInput} />
      <input name="date" type="date" value={form.date} onChange={handleInput} />
      <button>Add</button>
    </form>
  );
}

export default ExpenseForm;
