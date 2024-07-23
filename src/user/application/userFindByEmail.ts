import { User } from "../domain/user";
import { UserNotFoundError } from "../domain/userNotFoundError";
import { UserRepository } from "../domain/userRepository";

export class UserFindByEmail {
  constructor(private readonly userRepository: UserRepository) {}
  async run(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new UserNotFoundError("User not found");
    return user;
  }
}
