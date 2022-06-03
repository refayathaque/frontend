import Account from "./Account";
import Form from "./Form";

function WhitelistIPs({ accountsAndSecurityGroups }) {
  const renderAccounts = accountsAndSecurityGroups.map(
    (accountsAndSecurityGroup) => (
      <div className="col">
        <Account
          name={accountsAndSecurityGroup.account}
          securityGroups={accountsAndSecurityGroup.securityGroups}
        ></Account>
      </div>
    )
  );
  return (
    <div className="border border-primary">
      <p class="fs-2">Whitelist IPs</p>
      <div className="container">
        <div className="row">{renderAccounts}</div>
      </div>
      <Form></Form>
    </div>
  );
}

export default WhitelistIPs;
