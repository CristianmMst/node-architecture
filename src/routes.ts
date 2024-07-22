import { Router } from "express";
import { UserRoutes } from "./user/infrastructure/routes/userRoutes";
import { AuthRoutes } from "./auth/infrastructure/routes/authRoutes";

export class AppRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();

    router.use("/auth", AuthRoutes.routes);
    router.use("/users", UserRoutes.routes);

    return router;
  }
}
