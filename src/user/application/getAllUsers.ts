import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class GetAllUsers {
  constructor(protected readonly userRepository: UserRepository) {}

  async run(): Promise<User[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}
