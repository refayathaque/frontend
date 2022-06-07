import { useState, useEffect } from "react";
import server from "../mockingAPICalls";
import Instance from "./Instance";

export default function Parent() {
  const [instances, setInstances] = useState([]);

  const getNameTags = (tags) => {
    const nameObject = tags.find((element) => element.Key === "Name");
    // https://www.codegrepper.com/code-examples/javascript/find+object+in+array+javascript+by+key
    return nameObject.Value;
  };

  const renderInstances = instances.map((instance) => (
    <div key={instance.Instances[0].InstanceId}>
      <p className="col">
        {instance.Instances[0].InstanceId}
        <strong>{getNameTags(instance.Instances[0].Tags)}</strong>
      </p>
    </div>
  ));

  const fetchInstances = async () => {
    try {
      const response = await fetch("/api/instances");
      // console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      // need to JSON decode ALL response data before destructuring or doing any other JavaScripty things
      // console.log(data[0].Instances[0].Tags[1].Value);
      setInstances(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInstances();
  }, []);

  return (
    <div>
      <div className="border border-warning">
        <p className="fs-2">EC2</p>
        <div className="container">
          <div className="row">{renderInstances}</div>
        </div>
      </div>
    </div>
  );
}
