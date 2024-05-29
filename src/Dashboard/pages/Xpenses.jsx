import { useState } from "react";

const Xpenses = () => {
  const [createExpenses, setCreateExpenses] = useState(false);
  const [expenseData, setExpenseData] = useState({
    expenseCategory: "",
    expenseAmount: "",
    date: "",
    description: "",
  });
  const [displayedValues, setDisplayedValues] = useState([]);

  const handleCreateExpenses = () => {
    setCreateExpenses(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({ ...expenseData, [name]: value });
  };

  const handleDisplay = () => {
    setDisplayedValues([...displayedValues, expenseData]);
    setExpenseData({
      expenseCategory: "",
      expenseAmount: "",
      date: "",
      description: "",
    });
    setCreateExpenses(false);
    console.log(expenseData);
  };

  return (
    <>
      <div className="space-y-6 ">
        <div className="flex justify-between bg-white rounded-md shadow-md p-4 items-center lg:flex-row flex-col gap-3 ">
          <h1 className="font-bold text-lg text-blue-950">
            {" "}
            Total Expense: &#x20A6; 7000
          </h1>
          <button
            type="button"
            className="text-white bg-[#FB8500] hover:bg-[#FB8500]  px-12 py-4 rounded-md"
            onClick={handleCreateExpenses}
          >
            Add Expense +
          </button>
        </div>
    
          {!createExpenses &&
            displayedValues.map((expense, index) => (
              <div
                className="h-20 bg-white w-[96%] border-solid border-2 border-gray-600 rounded "
                key={index}
              >
                <div className="h-2/4 w-full text-center p-2">
                  <p> {expense.expenseCategory}</p>
                </div>
                <div className="h-2/4 w-full flex">
                  <div className="w-1/4 h-full p-2 text-left">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 4a2 2 0 0 0-2 2v1h10.968l-1.9-2.28A2 2 0 0 0 10.532 4H5ZM3 19V9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm9-8.5a1 1 0 0 1 1 1V13h1.5a1 1 0 1 1 0 2H13v1.5a1 1 0 1 1-2 0V15H9.5a1 1 0 1 1 0-2H11v-1.5a1 1 0 0 1 1-1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-1/4 h-full p-2 flex items-center justify-start">
                    &#x20A6;
                    {expense.expenseAmount}
                  </div>
                  <div className="w-1/4 h-full p-2 gap-x-2 flex items-center justify-start">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5.05h1a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2h1v-1a1 1 0 1 1 2 0v1h3v-1a1 1 0 1 1 2 0v1h3v-1a1 1 0 1 1 2 0v1Zm-15 6v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8H3ZM11 18a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p>{expense.date}</p>
                  </div>
                  <div className="w-1/4 h-full p-2 flex items-center gap-x-2 justify-start">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p>{expense.description} </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      {createExpenses && (
        <div className="py-8 bg-white lg:w-3/6   mt-6 rounded-md lg:ml-44 ml-0">
          <form
            action=""
            className="space-y-4 flex justify-center flex-col items-center"
          >
            <input
              className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-3/5 "
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
              onClick={handleDisplay}
            >
              + Add Expense
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Xpenses;
