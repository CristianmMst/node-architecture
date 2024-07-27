import { Request, Response, NextFunction } from "express";
import { UserAlreadyExists } from "../../../auth/domain/exceptions/UserAlreadyExists";
import { UserNotFoundError } from "../../../user/domain/exceptions/userNotFoundError";

export const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof UserNotFoundError)
    return res.status(404).json({ message: error.message });
  if (error instanceof UserAlreadyExists)
    return res.status(400).json({ message: error.message });
  if (error instanceof Error)
    return res.status(500).json({ message: error.message });
  return res.status(500).send("Something broke!");
};
