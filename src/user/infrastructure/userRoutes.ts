import { Router } from "express";
import { UserController } from "./userController";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const userController = new UserController();

    router.post("/register", userController.register);

    return router;
  }
}
