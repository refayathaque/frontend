import WhitelistIPs from "./WhitelistIPs";
import AllEnvironments from "./AllEnvironments";
import FetchAPICall from "./FetchAPICall";
import PostAPICall from "./PostAPICall";
import AddCars from "./AddCars";

function App() {
  const environments = [
    "ditgovcatmig",
    "ditgovperfmig",
    "ditgovuatmig",
    "ditgovdevmig",
  ];

  const serverTypes = [
    "dockermanager",
    "dockerworker",
    "appserver",
    "appserver-upload",
    "agent",
    "alfresco",
  ];

  const accountsAndSecurityGroups = [
    {
      account: "DIT GovCloud",
      securityGroups: ["NARA-safelist", "ECSWhitelist", "bastion-sg"],
    },
    {
      account: "DIT US Commercial",
      securityGroups: [
        "NARA-safelistCommercial",
        "ECSWhitelistCommercial",
        "hoo-bastion-sgCommercial",
        "boo-bastion-sgCommercial",
        "koo-bastion-sgCommercial",
      ],
    },
  ];

  return (
    <div>
      <AddCars></AddCars>
      <WhitelistIPs
        accountsAndSecurityGroups={accountsAndSecurityGroups}
      ></WhitelistIPs>
      <AllEnvironments
        environments={environments}
        serverTypes={serverTypes}
      ></AllEnvironments>
      <PostAPICall></PostAPICall>
      <FetchAPICall></FetchAPICall>
    </div>
  );
}

export default App;
