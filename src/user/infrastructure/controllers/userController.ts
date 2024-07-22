import { NextFunction, Request, Response } from "express";
import { UserNotFoundError } from "../../domain/userNotFoundError";
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
      if (error instanceof UserNotFoundError) {
        return res.status(404).json(error.message);
      }
      next(error);
    }
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, username } = req.body;
    try {
      await ServiceContainer.user.save.run(email, username, password);
      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  };
}
