import DashBoardHeader from "./header";
import SideBar from "./sidebar";



const DashBoardLayout = ({children}) => {
  return (
    <div className="h-screen flex">
      <div className="bg-slate-800 w-[20%] h-screen">
        <SideBar />
      </div>
      <div className="bg-gray-100 w-[80%] h-screen overflow-y-scroll">
        <DashBoardHeader />
        <div className="p-4">
        {children}
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

