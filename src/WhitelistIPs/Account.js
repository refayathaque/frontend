function Account({ name, securityGroups }) {
  const renderSecurityGroupButtons = securityGroups.map((securityGroup) => (
    <button key={securityGroup} type="button" className="btn btn-outline-warning">
      <div className="col">{securityGroup}</div>
    </button>
  ));
  return (
    <div className="border border-secondary">
      <p className="fs-3">{name}</p>
      <div className="container">
        <div className="row">{renderSecurityGroupButtons}</div>
      </div>
    </div>
  );
}

export default Account;
