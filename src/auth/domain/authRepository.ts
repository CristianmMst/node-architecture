import { JwtPayload } from "jsonwebtoken";

export interface AuthRepository {
  generateToken(payload: { id: string }): string;
  validateToken(token: string): string | JwtPayload;
}
