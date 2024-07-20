import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class UserRegister {
  constructor(private readonly userRepository: UserRepository) {}

  async run(email: string, username: string, password: string): Promise<void> {
    const user = new User(email, username, password);
    return this.userRepository.register(user);
  }
}
