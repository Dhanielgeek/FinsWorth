import { useState } from "react";

const AddAccount = () => {
    const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
    // You can add your logic here for what happens when the toggle button changes state
    if (!isChecked) {
      console.log('Toggle is ON');
    } else {
      console.log('Toggle is OFF');
    }
  };
  return (
    <div className="">
      <form className="flex justify-between">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-3/6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search user name, email........"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[#01193B] hover:bg-[#253851] px-12 py-3  w-1/5 rounded-md mr-10"
        >
          Search{" "}
        </button>
      </form>

      <form
        action=""
        className="space-y-4 flex justify-center flex-col mt-6 border-2 w-3/5 rounded-md bg-white  p-6 border-gray-700"
      >
        <input
          className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400  "
          type="text"
          placeholder="Name "
          required
          name="Name"
        />
        <input
          className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 "
          type="Email"
          placeholder="Email"
          required
          name="Email"
        />

<div className="flex">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className={`toggle-label bg-[#01193B] w-14 h-7 rounded-full p-1 flex justify-between items-center`}>
          <div className={`toggle-dot ${isChecked ? 'bg-red-500' : 'bg-green-300'} w-5 h-5 rounded-full shadow-md`}></div>
        </div>
        <span className="ml-2 text-gray-700">{ !isChecked ? "Active" : "Inactive"}</span>
      </label>
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={isChecked}
        onChange={toggleHandler}
      />
    </div>

        <div className="flex flex-row justify-evenly">
          <button
            type="button"
            className="text-[#01193B] border-2 border-[#01193B] hover:bg-gray-200 px-12 py-4 w-1/3  rounded-md"
          >
            Cancel
          </button>

          <button
            type="button"
            className="text-white bg-[#01193B] hover:bg-[#253851] px-12 py-4 w-1/3  rounded-md"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
