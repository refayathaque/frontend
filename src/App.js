import WhitelistIPs from "./WhitelistIPs";
import AllEnvironments from "./AllEnvironments";
import EC2 from "./EC2";

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
      <WhitelistIPs
        accountsAndSecurityGroups={accountsAndSecurityGroups}
      ></WhitelistIPs>
      <AllEnvironments
        environments={environments}
        serverTypes={serverTypes}
      ></AllEnvironments>
      <EC2></EC2>
    </div>
  );
}

export default App;
