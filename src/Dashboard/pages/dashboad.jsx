// import RenderBarChart from "./statistics";
import RenderBarChart from "./statistics";
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
      <div className="w-full">
        <div className="text-[#333333] font-semibold">Expense Statistics</div>
        {/* <RenderBarChart/> */}
        <RenderBarChart />
      </div>
      {/* transaction history */}
      <div className="-mt-14">
        <p className="text-[rgb(51,51,51)] font-semibold text-xl pb-6">
          Add Transaction
        </p>
        <table className="">
          <tr className="">
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>

          <tr>
            <td className="">
              <input type="text" className="outline-none" />
            </td>
            <td>
              <input type="text" className="outline-none" />
            </td>
            <td>
              <input type="date" className="outline-none" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
