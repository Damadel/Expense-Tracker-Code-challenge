# Expense Tracker

This is a simple expense tracker I built using React. It allows users to add and search through a
 list of expenses with basic form inputs and real-time updates.

---

## Features

- Add an expense with name, description, amount, and date.
- Display all expenses in a table.
- Live search through expenses by name or description.
- The form clears after each submission.
- Updates appear instantly without page reload.

---

## What I Used

- **React** – to create components and handle state.
- **useState** – for managing form inputs, expense list, and search field.
- **Basic CSS** – for layout, spacing, and table styling.
- **Vite** – for fast project setup and development.

---

## Components

### 🔹 App.jsx
- Main component.
- Holds the state for expenses and the search bar.
- Filters expenses and renders all components.

### 🔹 ExpenseForm.jsx
- Contains a form to input new expenses.
- Uses controlled components for inputs.
- Calls `addExpense()` from App when submitted.

### 🔹 ExpenseTable.jsx
- Receives filtered expense data from App.
- Maps through the data and shows it in a table.

### 🔹 SearchBar.jsx
- Simple input field to search by name or description.
- Controlled by the `search` state in App.

---


