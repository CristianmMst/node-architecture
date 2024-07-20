import { z, ZodError } from "zod";
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
      throw new Error(`${error.issues[0].path} ${error.issues[0].message}`);
      // res.status(400).json({
      //   message: "Invalid request",
      //   errors: error.errors,
      // });
    } else {
      next(error);
    }
  }
};
