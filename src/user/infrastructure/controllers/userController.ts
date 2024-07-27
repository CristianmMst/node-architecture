import { NextFunction, Request, Response } from "express";
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

  findById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const user = await ServiceContainer.user.findById.run(id);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  };
}
