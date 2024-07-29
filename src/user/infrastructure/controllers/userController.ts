import { NextFunction, Request, Response } from "express";
import { RequestAuth } from "../../../auth/types/RequestAuth";
import { ServiceContainer } from "../../../shared/infrastructure/serviceContainer";

export class UserController {
  constructor() {}

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await ServiceContainer.user.getAll.run();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  };

  getProfile = async (req: RequestAuth, res: Response, next: NextFunction) => {
    try {
      const { id } = req.user!;
      const user = await ServiceContainer.user.findById.run(id);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}
