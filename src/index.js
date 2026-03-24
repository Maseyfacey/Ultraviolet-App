import { createServer } from "http";
import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/bare/");

export default createServer((req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});
