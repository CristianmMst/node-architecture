import { User } from "../../domain/user";
import { UserRepository } from "../../domain/userRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async getAll(): Promise<User[]> {
    return this.users;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }
}
