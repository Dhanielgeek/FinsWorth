const EditProfile = () => {
  return (
    <section className="">
      <div className="h-28 w-28 rounded-full bg-slate-400 flex items-center justify-center relative">
        <h1 className="font-blod text-3xl">MF</h1>
        <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center absolute -right-4 bottom-4">
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
            />
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>

           <form
            action=""
            className="space-y-4 flex justify-center flex-col mt-6"
          >
            <input
              className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-2/5 "
              type="text"
              placeholder="Name "
              required
              name="userName"
             
            />
            <input
              className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-2/5"
              type="email"
              placeholder="Email"
              required
              name="Email"
            />
            <input
              className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-2/5"
              type="phoneNumber"
              placeholder="Phone Number"
              required
              name="phonenumder"
            />

            <button
              type="button"
              className="text-white bg-[#01193B] hover:bg-[#253851] px-12 py-4  w-2/5 rounded-md"
            >
              Update
            </button>
          </form>
    </section>
  );
};

export default EditProfile;
