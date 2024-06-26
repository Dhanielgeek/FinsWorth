import DashBoardLayout from "../dashboardLayout";
import { Routes, Route } from 'react-router-dom';
import DashBoard from "./dashboad";
import BudgetPage from "./BudgetPage";
import Xpenses from "./Xpenses";
import Notification from "./notification";
import Settings  from "./setting";




const Dashboard = () => {
  
  return( 
  <DashBoardLayout>
      <Routes>
        <Route path="dashboard" element={<DashBoard/>} />
        <Route path="budget" element={<BudgetPage/>} />
        <Route path='expenses' element={<Xpenses/>}/>
        <Route path="notification" element={<Notification />} />
        <Route path="settings" element={<Settings />} />
      
      </Routes>
    
    </DashBoardLayout>

);
};

export default Dashboard;
