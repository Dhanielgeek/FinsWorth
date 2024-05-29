// ExpenseForm.js
// import React from "react";
import React, { useState } from "react";

const Parent = ({ onSubmit }) => {
  const [expenseData, setExpenseData] = useState({
    expenseCategory: "",
    expenseAmount: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({ ...expenseData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(expenseData);
    setExpenseData({
      expenseCategory: "",
      expenseAmount: "",
      date: "",
      description: "",
    });
  };

  return (
    <div className="py-8 bg-white lg:w-3/6 mt-6 rounded-md lg:ml-44 ml-0">
      <form
        action=""
        className="space-y-4 flex justify-center flex-col items-center"
      >
        <input
          className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-3/5"
          type="text"
          placeholder="Expense Category"
          required
          id="expenseCategory"
          name="expenseCategory"
          value={expenseData.expenseCategory}
          onChange={handleChange}
        />
        <input
          className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-3/5"
          type="currency"
          placeholder="Expense Amount"
          required
          id="expenseAmount"
          name="expenseAmount"
          value={expenseData.expenseAmount}
          onChange={handleChange}
        />
        <input
          className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-3/5"
          type="text"
          placeholder="Enter Date"
          id="date"
          required
          name="date"
          value={expenseData.date}
          onChange={handleChange}
        />
        <textarea
          className="h-24 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-3/5"
          type="text"
          required
          placeholder="Add Description"
          name="description"
          value={expenseData.description}
          onChange={handleChange}
        />

        <button
          type="button"
          className="text-white bg-[#01193B] hover:bg-[#253851]  px-12 py-4 rounded-md"
          onClick={handleSubmit}
        >
          + Add Expense
        </button>
      </form>
    </div>
  );
};

export default Parent;
