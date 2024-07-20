import { z, ZodError } from "zod";
import { capitalize } from "../../../config/capitalize";
import { Request, Response, NextFunction } from "express";

const userSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(8),
});

export const validateUser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error(
        `${capitalize(error.issues[0].path[0].toString())} ${error.issues[0].message}`,
      );
    } else {
      next(error);
    }
  }
};
