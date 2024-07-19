import { User } from "./user";

export interface UserRepository {
  register(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
}
