import express, { Router, Application } from "express";
import { errorHandler } from "./shared/infrastructure/middlewares/errorHandler";

interface ServerOptions {
  port?: number;
  routes: Router;
}

export class Server {
  private readonly port: number;
  private readonly routes: Router;
  private readonly app: Application = express();

  constructor({ port = 3000, routes }: ServerOptions) {
    this.port = port;
    this.routes = routes;
  }

  start(): void {
    this.app.use(express.json());
    this.app.use(this.routes);

    this.app.use(errorHandler);

    this.app.listen(this.port, (): void => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
