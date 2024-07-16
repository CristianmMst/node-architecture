import express, {
  Router,
  Request,
  Response,
  Application,
  NextFunction,
} from "express";

interface ServerOptions {
  port?: number;
  routes: Router;
}

export class Server {
  private readonly app: Application = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor({ port = 3000, routes }: ServerOptions) {
    this.port = port;
    this.routes = routes;
  }

  start(): void {
    this.app.use(express.json());
    this.app.use(this.routes);

    this.app.use(
      (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
        if (err instanceof Error) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(500).send("Something broke!");
      },
    );

    this.app.listen(this.port, (): void => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
