function ExpenseTable({ expenses }) {
  console.log("✅ ExpenseTable is woking");
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.name}>
            <td>{exp.name}</td>
            <td>{exp.description}</td>
            <td>{exp.amount}</td>
            <td>{exp.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
