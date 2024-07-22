import { User } from "./user";

export interface UserRepository {
  getAll(): Promise<User[]>;
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
}
