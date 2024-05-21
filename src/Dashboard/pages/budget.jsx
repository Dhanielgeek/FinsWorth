import { useState } from 'react';

import CreateBudgetModal from './CreateBudget';

const Budget = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

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
      <div
        className="w-32 h-14 bg-[#FB8500] text-white text-sm flex items-center justify-center rounded-lg cursor-pointer"
        onClick={() => setVisible(true)}
      >
        Create Budget
        <i className='bx bx-plus'></i>
      </div>
      <CreateBudgetModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default Budget;
