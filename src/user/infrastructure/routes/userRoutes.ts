import { Router, Response } from "express";
import { RequestAuth } from "../../../auth/types/RequestAuth";
import { UserController } from "../controllers/userController";
import { authenticate } from "../../../auth/infrastructure/middlewares/authenticate";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const userController = new UserController();

    router.get("/", userController.getAll);
    router.get("/profile", authenticate, (req: RequestAuth, res: Response) => {
      if (!req.user) {
        return res.status(401).send("Unauthorized");
      }
      res.send("profile");
    });

    return router;
  }
}
