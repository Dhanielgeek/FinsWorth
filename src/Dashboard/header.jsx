const DashBoardHeader = () => {
  return (
    <div className="h-[15%] bg-white flex shadow-lg">
      <div className="w-4/6 font-semibold text-xl flex gap-x-4 items-center pl-10">
        <h1>Welcome!</h1>
        <h1>Ochemeta LTD</h1>
      </div>
      <div className="w-2/6 flex items-center gap-x-4 justify-end pr-10 ">
        <div>
          <svg
            className="w-7 h-7 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
          </svg>
        </div>
        <p className="text-blue-900 font-semibold text-base">Mary francis</p>
        <div className="w-[40px] h-[40px] flex items-center justify-center border-2 border-black rounded-full"> M</div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
