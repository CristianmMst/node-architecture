import "dotenv/config";
import { Server } from "./server";
import { AppRoutes } from "./shared/infrastructure/routes/routes";

const server = new Server({
  port: 3000,
  routes: AppRoutes.routes,
});

server.start();
