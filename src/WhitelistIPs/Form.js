function Form() {
  //   const renderAccounts = accountsAndSecurityGroups.map(
  //     (accountsAndSecurityGroup) => (
  //       <div className="col">
  //         <Account
  //           name={accountsAndSecurityGroup.account}
  //           securityGroups={accountsAndSecurityGroup.securityGroups}
  //         ></Account>
  //       </div>
  //     )
  //   );

  const submitFormHandler = () => {
    // sends data to AWS
  };

  const addForm = () => {
    return (
      <form className="container">
        <div className="row align-items-start">
          <div className="mb-3 col">
            <input
              placeholder="Name"
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
            />
          </div>
          <div className="mb-3 col">
            <input
              placeholder="IP address"
              type="text"
              className="form-control"
              id="IPaddress"
              aria-describedby="IPaddress"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary col"
            onSubmit={submitFormHandler}
          >
            Add
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="border border-danger">
      <p class="fs-3">Adding and editing</p>
      <p class="fs-4">New user</p>
      {addForm()}
      <p class="fs-4">Edit existing user</p>
      {/* <div className="container">
        <div className="row">{renderAccounts}</div>
      </div> */}
    </div>
  );
}

export default Form;
