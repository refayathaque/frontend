import { useState } from "react";

function Form({ onFormSubmission }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(make, model);
    const payload = {
      make,
      model,
      createdOn: new Date(),
    };
    console.log(payload);
    // sending data to backend (from index.js component in this directory) then resetting component state values using two-way binding (two-way binding useful in forms to be able to reset input values programatically, you can do this by setting the input element's "value" attribute to a new empty string state property [see input element below])
    onFormSubmission(payload);
    setModel("");
    setMake("");
  };

  const makeHandler = (event) => {
    setMake(event.target.value);
  };

  const modelHandler = (event) => {
    setModel(event.target.value);
  };

  const renderCarForm = () => {
    return (
      <form className="container" onSubmit={submitFormHandler}>
        <div className="row align-items-start">
          <div className="mb-3 col">
            <input
              placeholder="Model"
              type="text"
              className="form-control"
              id="model"
              aria-describedby="model"
              onChange={modelHandler}
              value={model}
            />
          </div>
          <div className="mb-3 col">
            <input
              placeholder="Make"
              type="text"
              className="form-control"
              id="make"
              aria-describedby="make"
              onChange={makeHandler}
              value={make}
            />
          </div>
          <button type="submit" className="btn btn-primary col">
            Add new car
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="border border-danger">
      <p className="fs-4">New car</p>
      {renderCarForm()}
    </div>
  );
}

export default Form;
