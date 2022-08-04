import { createServer } from "miragejs";
import instancesJSON from "./instances.json";
// https://bobbyhadz.com/blog/javascript-import-json-file

export default function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";
      this.get(
        "instances",
        // "instances poo", - do this to simulate an error and test error handling in the component
        () => {
          return instancesJSON;
        },
        { timing: 2000 }
        // to create an artificial delay
      );
    },
  });
  return server;
}

// https://miragejs.com/quickstarts/react/develop-an-app/
// to create an artificial delay, useful to test "loading" in components - https://miragejs.com/docs/main-concepts/route-handlers/#timing
// when writing tests to see if component error handling works - https://miragejs.com/docs/testing/application-tests/#testing-errors
