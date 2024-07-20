import { Router } from "express";
import { validateUser } from "../middlewares/validateUser";
import { UserController } from "../controllers/userController";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const userController = new UserController();

    router.get("/users", userController.getAll);
    router.post("/register", validateUser, userController.register);

    return router;
  }
}
