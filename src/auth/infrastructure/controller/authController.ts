import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "../../../shared/infrastructure/serviceContainer";

export class AuthController {
  register = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    try {
      await ServiceContainer.authService.register(user);
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  };

  login = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      return res.status(200).send({ email, password });
    } catch (error) {
      next(error);
    }
  };
}
