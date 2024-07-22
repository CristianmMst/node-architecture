import { Router } from "express";
import { UserController } from "../controllers/userController";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const userController = new UserController();

    router.get("/", userController.getAll);

    return router;
  }
}
