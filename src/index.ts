import "dotenv/config";
import { Server } from "./server";
import { AppRoutes } from "./routes";

const server = new Server({
  port: 3000,
  routes: AppRoutes.routes,
});

server.start();
