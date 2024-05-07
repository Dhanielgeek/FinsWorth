const Budget = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div className="w-32 h-14 flex flex-col items-center">
          <p className="text-sm">Current Balance</p>
          <p className="">0.00</p>
        </div>
        <div className="w-32 h-14 flex flex-col items-center">
          <p className="text-sm">Expense</p>
          <p>0.00</p>
        </div>
      </div>
      <div className="w-32  h-14 bg-[#FB8500] text-white text-sm flex items-center justify-center rounded-lg">
        Create Budget <i class='bx bx-plus'></i>
      </div>
    </div>
  );
};

export default Budget;
