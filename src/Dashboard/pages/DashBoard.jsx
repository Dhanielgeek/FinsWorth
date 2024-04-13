import DashBoardLayout from "../dashboardLayout";
import { Routes, Route } from 'react-router-dom';
import DashBoard from "./dashboad";
import Budget from "./budget";
import Expenses from "./expenses";
import Notification from "./notification";
import Settings  from "./setting";



const Dashboard = () => {
  
  return( 
  <DashBoardLayout>
 <Routes>
        <Route path="dashboard" element={<DashBoard/>} />
        <Route path="budget" element={<Budget />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="notification" element={<Notification />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    
    </DashBoardLayout>

);
};

export default Dashboard;
