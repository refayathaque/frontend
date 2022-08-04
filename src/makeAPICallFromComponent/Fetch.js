import { useState, useEffect, useCallback } from "react";

export default function Fetch() {
  const [instances, setInstances] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNameTags = (tags) => {
    const nameObject = tags.find((element) => element.Key === "Name");
    // https://www.codegrepper.com/code-examples/javascript/find+object+in+array+javascript+by+key
    return nameObject.Value;
  };
  // use this methodology for highly nested objects

  const renderInstances = instances.map((instance) => (
    <div key={instance.Instances[0].InstanceId}>
      <p className="col">
        {instance.Instances[0].InstanceId}
        <strong>{getNameTags(instance.Instances[0].Tags)}</strong>
      </p>
    </div>
  ));

  const fetchInstances = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/instances");
      // console.log(response);
      if (!response.ok) {
        throw new Error();
        // throwing a error here will take the code to the `catch` block
        // in addition to messing things up in Mirage, you can also change the endpoint in the fetch function to simulate errors
      }
      const data = await response.json();
      // need to JSON decode ALL response data before destructuring or doing any other JavaScripty things
      // console.log(data[0].Instances[0].Tags[1].Value);
      setInstances(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setIsLoading(false); // setting it to false no matter if we have a successful or erroneous response, because either way, we're done loading
  }, []);
  // why `useCallback`? - https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599820#questions:~:text=Using%20useEffect()%20For-,Requests,-6min

  useEffect(() => {
    fetchInstances();
  }, [fetchInstances]);
  // ^ array of dependencies to define when the the functions in `useEffect` should be called, the function will only be called when the array of dependencies change - "since functions are objects, they change when the component is re-rendered": Max (don't really understand this though...) - important to have this `useEffect` block after the functions inside of them are defined

  return (
    <div>
      <div className="border border-warning">
        <p className="fs-2">Fetch</p>
        <div className="container">
          {isLoading && <p className="row">Loading...</p>}
          {!isLoading && error && <p>{error}</p>}
          {!isLoading && <div className="row">{renderInstances}</div>}
        </div>
      </div>
    </div>
  );
}

// handling loading and data states - https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599814#questions:~:text=180.-,Handling,-Http%20Errors
// ^ has data handling for when you get an empty array of data, so you can show "no data", in this example that bit of code was buggy so left it out, in the video he does a manual fetch, so it makes sense to show "no data"
