import { User } from "../domain/user";
import { Id } from "../domain/valueObjects/Id";
import { UserRepository } from "../domain/userRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async register(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(id: Id): Promise<User | null> {
    return this.users.find((user) => user.id.value === id.value) || null;
  }
}
