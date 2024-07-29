import { Router } from "express";
import { UserController } from "../controllers/userController";
import { authenticate } from "../../../auth/infrastructure/middlewares/authenticate";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const userController = new UserController();

    router.get("/", userController.getAll);
    router.get("/profile", authenticate, userController.getProfile);

    return router;
  }
}
