import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import { UserNotFoundError } from "../domain/exceptions/userNotFoundError";

export class UserFindByEmail {
  constructor(private readonly userRepository: UserRepository) {}
  async run(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new UserNotFoundError("User not found");
    return user;
  }
}
