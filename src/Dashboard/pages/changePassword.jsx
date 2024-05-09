const ChangePassword = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-gary-600 font-semibold text-base">Change Password</h3>
      <p>Enter a new password below to change your password</p>
      <form
            action=""
            className="space-y-4 flex justify-center flex-col mt-6"
          >
            <input
              className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-2/5 "
              type="text"
              placeholder="password "
              required
              name="password"
            />
            <input
              className="h-14 px-2 text-gray-400 rounded-sm border-2 border-gray-400 w-2/5"
              type="password"
              placeholder="confirm password"
              required
              name="confirmPassword"
            />
            <button
              type="button"
              className="text-white bg-[#01193B] hover:bg-[#253851] px-12 py-4  w-1/5 rounded-md"
            >
              Reset Password
            </button>
          </form>
    </div>
  );
};

export default ChangePassword;
