import { jwtSecret } from "../config/jwt";
import jwt, { JwtPayload } from "jsonwebtoken";

export class TokenService {
  generateToken(payload: { id: string }): string {
    return jwt.sign(payload, jwtSecret);
  }

  validateToken(token: string): string | JwtPayload {
    return jwt.verify(token, jwtSecret);
  }
}
