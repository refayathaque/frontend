import ChangeASGSettings from "./ChangeASGSettings";

function Environment({ name: environment, serverTypes }) {
  return (
    <div className="border border-success">
      <p class="fs-2">{environment}</p>
      <ChangeASGSettings serverTypes={serverTypes}></ChangeASGSettings>
    </div>
  );
}

export default Environment;
