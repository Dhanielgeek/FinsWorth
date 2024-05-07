import DashBoardHeader from "./header";
import SideBar from "./sidebar";



const DashBoardLayout = ({ children }) => {
  return (
    <div className="h-screen flex relative">
      <div className="bg-slate-800 w-[20%] h-screen fixed ">
        <SideBar />
      </div>
      <div className="flex-1 bg-gray-100 h-screen ml-[20%] overflow-y-scroll">
        <DashBoardHeader />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;



