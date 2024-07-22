import { NextFunction, Request, Response } from "express";

export class AuthController {
  register = (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body;
      return res.status(200).send(user);
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
