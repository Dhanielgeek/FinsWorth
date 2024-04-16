import Total from "./Total";
const DashBoard = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div>
          <Total tittle="Current Balance" balance="0.00" />
        </div>
        <div>
          <Total tittle="Expenses" balance="0.00" />
        </div>
      </div>
      {/* expense graph */}
      <div className="w-full h-52 bg-gray-500">
        <div className="text-[#333333] font-semibold text-xl">Expense Statistics</div>
      </div>
      {/* transaction history */}
      <div>
        <p className="text-[#333333] font-semibold text-xl">Transaction History</p>
      </div>
    </div>
  );
};

export default DashBoard;
