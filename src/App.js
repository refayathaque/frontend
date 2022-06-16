import AllEnvironments from "./Samples/AllEnvironments";
import FetchAPICall from "./FetchAPICall";
import PostAPICall from "./PostAPICall";
import AddCars from "./AddCars";

function App() {
  const environments = ["ditgovcatmig", "ditgovperfmig"];

  const serverTypes = ["dockermanager", "dockerworker"];

  return (
    <div>
      <AddCars></AddCars>
      <PostAPICall></PostAPICall>
      <FetchAPICall></FetchAPICall>
      <AllEnvironments
        environments={environments}
        serverTypes={serverTypes}
      ></AllEnvironments>
    </div>
  );
}

export default App;
