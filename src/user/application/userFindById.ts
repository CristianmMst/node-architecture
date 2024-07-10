import { User } from "../domain/user";
import { UserId } from "../domain/valueObjects/userId";
import { UserRepository } from "../domain/userRepository";
import { UserNotFoundError } from "../domain/userNotFoundError";

export class UserFindById {
  constructor(protected readonly userRepository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.userRepository.findById(new UserId(id));
    if (!user) throw new UserNotFoundError("User not found");
    return user;
  }
}
