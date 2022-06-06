import { useState } from "react";

function NewUser({ onFormSubmission }) {
  const [newUserIP, setNewUserIP] = useState("");
  const [newUserName, setNewUserName] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(newUserName, newUserIP);
    const payload = {
      userName: newUserName,
      IPAddress: newUserIP,
      createdOn: new Date(),
    };
    console.log(payload);
    // sending data to AWS EC2 (from parent component) then resetting component state values using two-way binding (two-way binding useful in forms to be able to reset input values programatically, you can do this by setting the input element's "value" attribute to a new empty string state property [see input element below])
    onFormSubmission(payload);
    setNewUserName("");
    setNewUserIP("");
  };

  const newUserNameHandler = (event) => {
    setNewUserName(event.target.value);
  };

  const newUserIPHandler = (event) => {
    setNewUserIP(event.target.value);
  };

  const renderNewUserForm = () => {
    return (
      <form className="container" onSubmit={submitFormHandler}>
        <div className="row align-items-start">
          <div className="mb-3 col">
            <input
              placeholder="Name"
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              onChange={newUserNameHandler}
              value={newUserName}
            />
          </div>
          <div className="mb-3 col">
            <input
              placeholder="IP"
              type="text"
              className="form-control"
              id="IP"
              aria-describedby="IP"
              onChange={newUserIPHandler}
              value={newUserIP}
            />
          </div>
          <button type="submit" className="btn btn-primary col">
            Add new user
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="border border-danger">
      <p className="fs-4">New user</p>
      {renderNewUserForm()}
    </div>
  );
}

export default NewUser;
