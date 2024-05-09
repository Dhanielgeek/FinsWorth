import DashBoardLayout from "../dashboardLayout";
import { Routes, Route } from 'react-router-dom';
import DashBoard from "./dashboad";
import Budget from "./budget";
import Xpenses from "./Xpenses";
import Notification from "./notification";
import Settings  from "./setting";
// import CreateBudget from "./CreateBudget";




const Dashboard = () => {
  
  return( 
  <DashBoardLayout>
      <Routes>
        <Route path="dashboard" element={<DashBoard/>} />
        <Route path="budget" element={<Budget />} />
        <Route path='expenses' element={<Xpenses/>}/>
        <Route path="notification" element={<Notification />} />
        <Route path="settings" element={<Settings />} />
        {/* <Route path="createbudget" element={<CreateBudget/>}/> */}
      </Routes>
    
    </DashBoardLayout>

);
};

export default Dashboard;
