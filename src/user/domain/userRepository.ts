import { User } from "./user";
import { UserId } from "./valueObjects/userId";

export interface UserRepository {
  register(user: User): Promise<void>;
  findById(id: UserId): Promise<User | null>;
}
