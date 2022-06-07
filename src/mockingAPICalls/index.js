import { createServer, Model } from "miragejs";
import instancesJSON from "./instances.json";
// https://bobbyhadz.com/blog/javascript-import-json-file

export default function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";
      this.get("instances", () => {
        return instancesJSON;
      });
    },
  });
  return server;
}

// https://miragejs.com/quickstarts/react/develop-an-app/
