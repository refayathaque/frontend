import Account from "./Account";
import Form from "./Forms";

export default function Parent({ accountsAndSecurityGroups }) {
  const renderAccounts = accountsAndSecurityGroups.map(
    (accountsAndSecurityGroup) => (
      <div key={accountsAndSecurityGroup.account} className="col">
        <Account
          name={accountsAndSecurityGroup.account}
          securityGroups={accountsAndSecurityGroup.securityGroups}
        ></Account>
      </div>
    )
  );
  return (
    <div className="border border-primary">
      <p className="fs-2">Whitelist IPs</p>
      <div className="container">
        <div className="row">{renderAccounts}</div>
      </div>
      <Form></Form>
    </div>
  );
}

// to understand how to pass data from a child component to a parent component we will make the API call from this component instead of the Form component
