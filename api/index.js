import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/bare/");

export default async function handler(req, res) {
  try {
    if (bare.shouldRoute(req)) {
      await bare.routeRequest(req, res);
    } else {
      res.statusCode = 404;
      res.end("Not found");
    }
  } catch (err) {
    console.error("Bare server error:", err);
    res.statusCode = 500;
    res.end("Server error");
  }
}
