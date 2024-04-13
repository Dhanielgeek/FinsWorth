import DashBoardHeader from "./header";
import SideBar from "./sidebar";



const DashBoardLayout = ({children}) => {
  return (
    <div className="h-screen flex">
      <div className="bg-slate-800 w-[20%] h-screen">
        <SideBar />
      </div>
      <div className="bg-white w-[80%] h-screen">
        <DashBoardHeader />
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;

