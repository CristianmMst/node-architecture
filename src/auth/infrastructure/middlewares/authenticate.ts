import { NextFunction, Response } from "express";
import { RequestAuth } from "../../types/RequestAuth";
import { TokenService } from "../../application/tokenService";
import { InvalidToken } from "../../domain/exceptions/InvalidToken";
import { MissingToken } from "../../domain/exceptions/MissingToken";

const tokenService = new TokenService();

export const authenticate = (
  req: RequestAuth,
  _res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.access_token;
  if (!token) throw new MissingToken();
  try {
    const user = tokenService.validateToken(token);
    req.user = { id: user.id };
    next();
  } catch (error) {
    throw new InvalidToken();
  }
};
