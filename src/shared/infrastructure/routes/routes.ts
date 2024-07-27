import { Router } from "express";
import { AuthRoutes } from "../../../auth/infrastructure/routes/authRoutes";
import { UserRoutes } from "../../../user/infrastructure/routes/userRoutes";

export class AppRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();

    router.use("/auth", AuthRoutes.routes);
    router.use("/users", UserRoutes.routes);

    return router;
  }
}
