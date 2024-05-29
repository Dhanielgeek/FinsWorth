import { useSelector } from "react-redux";

const DashBoardHeader = () => {

  const userData = useSelector((state)=> state.feature.user)

  console.log(userData);


  const getFirstAndLastLetter = (name) => {
    if (!name) return "";
    const trimmedName = name.trim();
    if (trimmedName.length <= 1) return trimmedName.toUpperCase();
    return (trimmedName[0] + trimmedName[trimmedName.length - 1]).toUpperCase();
  };

  const companyInitials = getFirstAndLastLetter(userData.company_Name);


  return (
    <div className="w-full h-[10%] md:h-[15%] bg-white shadow-sm flex items-center px-4 justify-between">
      <div className="font-semibold flex flex-col md:flex-row lg:gap-2 text-sm">
        <h1>Welcome!</h1>
        <h1>
          {userData.company_Name}
        </h1>
      </div>
      <div className="w-2/6 flex items-center lg:gap-x-4 justify-end lg:pr-10 ">
        <div className="">
          <svg
            className=" text-gray-800 dark:text-white"
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
        <p className="hidden lg:flex text-blue-900 font-semibold text-base">{userData.role}</p>
        <div className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] flex items-center justify-center border-2 border-black rounded-full">
          {companyInitials}
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
