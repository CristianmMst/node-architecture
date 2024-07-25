import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof Error) {
    return res.status(500).json({ message: error.message });
  }
  return res.status(500).send("Something broke!");
};
