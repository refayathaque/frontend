import Environment from "./Environment";

function AllEnvironments({ environments, serverTypes }) {
  const renderEnvironments = environments.map((environment) => (
    <div className="col">
      <Environment name={environment} serverTypes={serverTypes}/>
    </div>
  ));

  return (
    <div className="border border-primary">
      <p class="fs-2">DIT GovCloud Environments</p>
      <div className="container">
        <div className="row">{renderEnvironments}</div>
      </div>
    </div>
  );
}

export default AllEnvironments;

// dynamically rendering components
// https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx
