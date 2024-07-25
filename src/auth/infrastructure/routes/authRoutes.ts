import { Router } from "express";
import { AuthController } from "../controller/authController";
import { validateUser } from "../../../user/infrastructure/middlewares/validateUser";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const authController = new AuthController();

    router.post("/login", authController.login);
    router.post("/register", validateUser, authController.register);

    return router;
  }
}
