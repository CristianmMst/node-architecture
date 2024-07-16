import { User } from "./user";
import { Id } from "./valueObjects/Id";

export interface UserRepository {
  register(user: User): Promise<void>;
  findById(id: Id): Promise<User | null>;
}
