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

  login = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    try {
      const token = await ServiceContainer.authService.login(user);
      return res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json({ token });
    } catch (error) {
      next(error);
    }
  };
}
