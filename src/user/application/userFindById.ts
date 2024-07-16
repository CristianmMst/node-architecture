import { User } from "../domain/user";
import { Id } from "../domain/valueObjects/Id";
import { UserRepository } from "../domain/userRepository";
import { UserNotFoundError } from "../domain/userNotFoundError";

export class UserFindById {
  constructor(protected readonly userRepository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.userRepository.findById(new Id(id));
    if (!user) throw new UserNotFoundError("User not found");
    return user;
  }
}
