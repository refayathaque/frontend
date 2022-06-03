function ChangeASGSettings({ serverTypes }) {
  const renderServerTypeButtons = serverTypes.map((server) => (
    <button type="button" className="btn btn-outline-danger">
      <div className="col">{server}</div>
    </button>
  ));

  return (
    <div className="border border-secondary">
      <p class="fs-4">Change ASG settings</p>
      <div className="container">
        <div className="row">{renderServerTypeButtons}</div>
      </div>
    </div>
  );
}

export default ChangeASGSettings;
