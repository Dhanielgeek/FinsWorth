import { useState } from "react";
import TabButtons from "../../Components/Tabbutton";
import TabContent from "../../Components/Tab";
import EditProfile from "./editProfile";
import ChangePassword from "./changePassword";
import AddAccount from "./addAccoun";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const settingsData = [
    {
      animal: "Edit Profile",
      path: <EditProfile/>,
    },
    {
      animal: "Change Password",
      path: <ChangePassword/>,
    },
    {
      animal: "Add Account",
      path: <AddAccount/>,
    },
  ];

  return (
    <div className="p-4">
<TabButtons
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        settingsData={settingsData}
      />
      <TabContent activeTab={activeTab} settingsData={settingsData} />
    </div>

  );
};

export default Settings;

