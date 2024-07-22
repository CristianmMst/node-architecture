import { User } from "../../user/domain/user";

export interface AuthRepository {
  register(user: User): Promise<void>;
  login(email: string, password: string): Promise<User | null>;
}
