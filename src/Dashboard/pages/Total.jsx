import React from "react";
const Total = (props) => {
  return (
    <div className="w-32  h-14 bg-[#FB8500] flex flex-col items-center justify-center rounded-lg">
      <p className="text-sm font-semibold">{props.tittle}</p>
      <p className="text-sm font-semibold">{props.balance}</p>
    </div>
  );
};
export default Total;
