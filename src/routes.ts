import { Router } from "express";
import { UserRoutes } from "./user/infrastructure/routes/userRoutes";

export class AppRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();

    router.use("/auth", UserRoutes.routes);

    return router;
  }
}
