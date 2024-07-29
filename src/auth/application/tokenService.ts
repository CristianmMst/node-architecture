import { jwtSecret } from "../config/jwt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthRepository } from "../domain/authRepository";

export class TokenService implements AuthRepository {
  generateToken(payload: { id: string }) {
    return jwt.sign(payload, jwtSecret);
  }

  validateToken(token: string) {
    return jwt.verify(token, jwtSecret) as JwtPayload;
  }
}
