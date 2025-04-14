import { useState } from "react";
import "./App.css";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { name: "Lunch", description: "food", amount: 800, date: "2025-04-10" },
    { name: "Books", description: "Study", amount: 1200, date: "2025-04-08" },
    { name: "Shoes", description: "Nike", amount: 3000, date: "2025-04-06" },
  ]);

  const [search, setSearch] = useState("");
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const results = expenses.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <SearchBar search={search} setSearch={setSearch} />
      <ExpenseTable expenses={results} />
    </div>
  );
}

export default App;
